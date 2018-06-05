package services

import (
	"encoding/json"
	"io"
	"io/ioutil"
	"mime/multipart"
	"os"
	"path/filepath"

	"github.com/bitansaha/blaster/app/blaster/model"
	"github.com/bitansaha/blaster/app/blaster/networkerrors"
	"github.com/bitansaha/blaster/app/config"
)

const (
	fileName = "test_data.json"
)

func GetTestNames() ([]string, error) {
	if files, err := ioutil.ReadDir(config.GetBlasterConfiguration().DataLocation); err == nil {
		testNames := make([]string, 0)
		for _, dir := range files {
			if dir.IsDir() {
				testNames = append(testNames, dir.Name())
			}

		}
		return testNames, nil
	} else {
		return nil, networkerrors.NewNetworkError("Failed to read data directory", &networkerrors.Error500{})
	}
}

func GetTestByName(testName string) (*model.TestJSON, error) {
	var testJSON model.TestJSON
	filePath := filepath.Join(config.GetBlasterConfiguration().DataLocation, testName, fileName)
	file, err := os.Open(filePath)

	if err != nil {
		DeleteTest(testName)
		return &testJSON, networkerrors.NewNetworkError("Data file not found", &networkerrors.Error404{})
	}

	if err = json.NewDecoder(file).Decode(&testJSON); err != nil {
		return &testJSON, networkerrors.NewNetworkError("Failed to read data", &networkerrors.Error500{})
	}

	return &testJSON, nil
}

func CreateTest(testName string, testJSON *model.TestJSON, files map[string][]*multipart.FileHeader) (nErr error) {
	//Post Create Validation
	defer func() {
		if nErr != nil {
			DeleteTest(testName)
		}
	}()

	// Check if the test already exists
	testDirectoryExists := checkTestDirectory(testName)
	if testDirectoryExists {
		return networkerrors.NewNetworkError("Test already exists", &networkerrors.Error409{})
	}

	if nErr = validate(testJSON, files); nErr != nil {
		return nErr
	}

	// Create the required Directory structure for the test
	directoryPath := filepath.Join(config.GetBlasterConfiguration().DataLocation, testName)
	if err := os.MkdirAll(directoryPath, os.ModePerm); err != nil {
		return networkerrors.NewNetworkError("Failed to create directory structure: "+err.Error(), &networkerrors.Error500{})
	}

	if nErr = saveJsonData(testName, testJSON); nErr != nil {
		return
	}

	if nErr = saveCsvFiles(testName, testJSON, files); nErr != nil {
		return
	}

	return nil
}

func validate(testJSON *model.TestJSON, files map[string][]*multipart.FileHeader) error {
	var validRowCount int
	for scenarioCount, scenario := range testJSON.ExecutionPlan.Scenarios {
		if scenario.FileName != "" {
			if file := files[scenario.FileName]; file != nil {
				if multipartFile, err := file[0].Open(); err != nil {
					return networkerrors.NewNetworkError("Failed to open file: "+scenario.FileName, &networkerrors.Error500{})
				} else {
					defer multipartFile.Close()
					if rowCount, err := getNumberOfRows(multipartFile); err != nil {
						return networkerrors.NewNetworkError("Failed to read file: "+scenario.FileName, &networkerrors.Error500{})
					} else {
						if scenarioCount == 0 {
							validRowCount = rowCount
						} else {
							if validRowCount != rowCount {
								return networkerrors.NewNetworkError("Invalid number of Rows: "+scenario.FileName, &networkerrors.Error400{})
							}
						}
					}
				}
			} else {
				return networkerrors.NewNetworkError("File NOT found by the name: "+scenario.FileName, &networkerrors.Error400{})
			}
		}
	}
	return nil
}

func saveJsonData(testName string, testJSON *model.TestJSON) error {
	directoryPath := filepath.Join(config.GetBlasterConfiguration().DataLocation, testName)
	filePath := filepath.Join(directoryPath, fileName)

	if jsonDataFile, err := os.Create(filePath); err != nil {
		return networkerrors.NewNetworkError("Failed to create data file: "+err.Error(), &networkerrors.Error500{})
	} else {
		defer jsonDataFile.Close()
		if jsonData, err := json.Marshal(testJSON); err != nil {
			return networkerrors.NewNetworkError("Failed to marshal json data: "+err.Error(), &networkerrors.Error500{})
		} else {
			if _, err := jsonDataFile.Write(jsonData); err != nil {
				return networkerrors.NewNetworkError("Failed to write to data file: "+err.Error(), &networkerrors.Error500{})
			}
		}
	}
	return nil
}

func saveCsvFiles(testName string, testJSON *model.TestJSON, files map[string][]*multipart.FileHeader) error {
	directoryPath := filepath.Join(config.GetBlasterConfiguration().DataLocation, testName)

	for _, scenario := range testJSON.ExecutionPlan.Scenarios {
		if scenario.FileName != "" {
			if fileInMemory, err := files[scenario.FileName][0].Open(); err != nil {
				return networkerrors.NewNetworkError("Failed to open multipart file: "+scenario.FileName, &networkerrors.Error500{})
			} else {
				defer fileInMemory.Close()
				filePath := filepath.Join(directoryPath, scenario.FileName)
				if file, err := os.Create(filePath); err != nil {
					return networkerrors.NewNetworkError("Failed to create file: "+scenario.FileName+", "+err.Error(), &networkerrors.Error500{})
				} else {
					defer file.Close()
					if _, err := io.Copy(file, fileInMemory); err != nil {
						return networkerrors.NewNetworkError("Failed to write file: "+scenario.FileName+", "+err.Error(), &networkerrors.Error500{})
					}
				}
			}
		}
	}

	return nil
}

func DeleteTest(testName string) bool {
	testDirectoryExists := checkTestDirectory(testName)
	if testDirectoryExists {
		directoryPath := filepath.Join(config.GetBlasterConfiguration().DataLocation, testName)
		os.RemoveAll(directoryPath)
	}

	return testDirectoryExists
}

func checkTestDirectory(testName string) bool {
	directoryPath := filepath.Join(config.GetBlasterConfiguration().DataLocation, testName)
	if _, err := os.Stat(directoryPath); err == nil {
		return true
	} else {
		return false
	}
}

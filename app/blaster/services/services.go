package services

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"os"
	"path/filepath"

	"github.com/bitansaha/blaster/app/blaster/networkerrors"
	"github.com/bitansaha/blaster/app/config"
)

type TestJSON struct {
	TestDefinition TestDefinitionJSON `json:"testDefinition"`
	ExecutionPlan  ExecutionPlanJSON  `json:"executionPlan"`
}

type TestDefinitionJSON struct {
	TestName       string `json:"testName"`
	UserCount      int64  `json:"userCount"`
	RampUpDuration int64  `json:"rampUpDuration"`
	RepeatCount    int64  `json:"repeatCount"`
}

type ExecutionPlanJSON struct {
	BaseUrl   string         `json:"baseUrl"`
	Headers   []HeaderJSON   `json:"headers"`
	Scenarios []ScenarioJSON `json:"scenarios"`
}

type HeaderJSON struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}

type ScenarioJSON struct {
	Name                string   `json:"name"`
	FileName            string   `json:"fileName"`
	DataFileColumnNames []string `json:"dataFileColumnNames"`
	RequestMethodType   string   `json:"requestMethodType"`
	RequestPath         string   `json:"requestPath"`
	RequestBody         string   `json:"requestBody"`
}

const (
	fileName = "test_data"
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
		return nil, errors.New("Failed to read data directory")
	}
}

func GetTestByName(testName string) (*TestJSON, error) {
	var testJSON TestJSON
	filePath := filepath.Join(config.GetBlasterConfiguration().DataLocation, testName, fileName)
	file, err := os.Open(filePath)

	if err != nil {
		deleteTest(testName)
		return &testJSON, networkerrors.NewNetworkError("Data file not found", &networkerrors.Error404{})
	}

	if err = json.NewDecoder(file).Decode(&testJSON); err != nil {
		return &testJSON, networkerrors.NewNetworkError("Failed to read data", &networkerrors.Error500{})
	}

	return &testJSON, nil
}

func deleteTest(testName string) {
	directoryPath := filepath.Join(config.GetBlasterConfiguration().DataLocation, testName)
	if _, err := os.Stat(directoryPath); err == nil {
		os.RemoveAll(directoryPath)
	}
}

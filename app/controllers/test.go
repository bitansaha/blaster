package controllers

import (
	"encoding/json"
	"mime/multipart"

	"github.com/bitansaha/blaster/app/blaster/model"
	"github.com/bitansaha/blaster/app/blaster/networkerrors"
	"github.com/bitansaha/blaster/app/blaster/services"
	"github.com/revel/revel"
)

type TestController struct {
	*revel.Controller
}

const (
	testJsonKey = "testJson"
)

func (testController *TestController) GetTests() revel.Result {
	if tests, err := services.GetTestNames(); err != nil {
		setErrorMessage(testController.Response, err)
		return testController.Result
	} else {
		return testController.RenderJSON(tests)
	}
}

func (testController *TestController) GetTest(testName string) revel.Result {
	if test, err := services.GetTestByName(testName); err != nil {
		setErrorMessage(testController.Response, err)
		return testController.Result
	} else {
		return testController.RenderJSON(test)
	}
}

func (testController *TestController) CreateTest(testName string) revel.Result {
	if testJson, files, err := getMultipartRequestData(testController.Request); err != nil {
		setErrorMessage(testController.Response, err)
	} else {
		if err = services.CreateTest(testName, testJson, files); err != nil {
			setErrorMessage(testController.Response, err)
		}
	}
	return testController.Result
}

func (testController *TestController) DeleteTest(testName string) revel.Result {
	if !services.DeleteTest(testName) {
		setErrorMessage(testController.Response, networkerrors.NewNetworkError("Data file not found", &networkerrors.Error404{}))
	}
	return testController.Result
}

func (testController *TestController) UpdateTest(testName string) revel.Result {
	if testJson, files, err := getMultipartRequestData(testController.Request); err != nil {
		setErrorMessage(testController.Response, err)
	} else {
		if err = services.UpdateTest(testName, testJson, files); err != nil {
			setErrorMessage(testController.Response, err)
		}
	}
	return testController.Result
}

func getMultipartRequestData(request *revel.Request) (*model.TestJSON, map[string][]*multipart.FileHeader, error) {
	var testJson model.TestJSON
	if serverMultipartForm, err := request.GetMultipartForm(); err != nil {
		return &testJson, nil, networkerrors.NewNetworkError("Error getting multipart data", &networkerrors.Error500{})
	} else {
		if testJsonString := serverMultipartForm.GetValues().Get(testJsonKey); testJsonString == "" {
			return &testJson, nil, networkerrors.NewNetworkError("TestJSON not available", &networkerrors.Error400{})
		} else {
			if err := json.Unmarshal([]byte(testJsonString), &testJson); err != nil {
				return &testJson, nil, networkerrors.NewNetworkError("Failed to unmarshal json data", &networkerrors.Error400{})
			} else {
				files := serverMultipartForm.GetFiles()
				return &testJson, files, nil
			}
		}
	}
}

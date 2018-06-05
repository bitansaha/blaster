package controllers

import (
	"encoding/json"

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
	if serverMultipartForm, err := testController.Request.GetMultipartForm(); err != nil {
		setErrorMessage(testController.Response, networkerrors.NewNetworkError("Error getting multipart data", &networkerrors.Error500{}))
	} else {
		if testJsonString := serverMultipartForm.GetValues().Get(testJsonKey); testJsonString == "" {
			setErrorMessage(testController.Response, networkerrors.NewNetworkError("TestJSON not available", &networkerrors.Error400{}))
		} else {
			var testJson model.TestJSON
			if err := json.Unmarshal([]byte(testJsonString), &testJson); err != nil {
				setErrorMessage(testController.Response, networkerrors.NewNetworkError("Failed to unmarshal json data", &networkerrors.Error400{}))
			} else {
				files := serverMultipartForm.GetFiles()
				if nErr := services.CreateTest(testName, &testJson, files); nErr != nil {
					setErrorMessage(testController.Response, nErr)
				}
			}
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

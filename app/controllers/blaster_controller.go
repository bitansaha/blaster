package controllers

import "github.com/revel/revel"
import "github.com/bitansaha/blaster/app/blaster/services"
import "github.com/bitansaha/blaster/app/blaster/networkerrors"

type BlasterController struct {
	*revel.Controller
}

func (blasterController BlasterController) GetTests() revel.Result {
	if tests, err := services.GetTestNames(); err != nil {
		return blasterController.RenderError(err)
	} else {
		return blasterController.RenderJSON(tests)
	}
}

func (blasterController BlasterController) GetTest(testName string) revel.Result {
	if test, err := services.GetTestByName(testName); err != nil {
		switch err.(type) {
		case *networkerrors.Error500:
			return blasterController.RenderError(err)
		case *networkerrors.Error404:
			return blasterController.NotFound(err.Error())
		default:
			response := blasterController.Response
			response.SetStatus(500)
			response.GetWriter().Write([]byte("Unknown Error: " + err.Error()))
			return blasterController.Result
		}
	} else {
		return blasterController.RenderJSON(test)
	}

}

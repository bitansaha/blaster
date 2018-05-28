package controllers

import "github.com/revel/revel"
import "github.com/bitansaha/blaster/app/blaster/services"

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

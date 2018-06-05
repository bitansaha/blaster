package controllers

import (
	"github.com/bitansaha/blaster/app/blaster/networkerrors"
	"github.com/revel/revel"
)

func _setErrorMessage(response *revel.Response, errorCode int, errorMessage string) {
	response.SetStatus(errorCode)
	response.GetWriter().Write([]byte(errorMessage))
}

func setNetworkErrorMessage(response *revel.Response, networkError networkerrors.NetworkError) {
	_setErrorMessage(response, networkError.GetErrorCode(), networkError.Error())
}

func setErrorMessage(response *revel.Response, e error) {
	switch e.(type) {
	case networkerrors.NetworkError:
		setNetworkErrorMessage(response, e.(networkerrors.NetworkError))
	default:
		_setErrorMessage(response, 500, e.Error())
	}
}

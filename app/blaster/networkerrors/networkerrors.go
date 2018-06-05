package networkerrors

type NetworkError interface {
	setErrorMessage(errorMessage string)
	setErrorCode(errorCode int)
	Error() string
	GetErrorCode() int
}

type blasterError struct {
	message   string
	errorCode int
}

func (blasterError *blasterError) Error() string {
	return blasterError.message
}

func (blasterError *blasterError) setErrorMessage(errorMessage string) {
	blasterError.message = errorMessage
}

func (blasterError *blasterError) GetErrorCode() int {
	return blasterError.errorCode
}

func (blasterError *blasterError) setErrorCode(errorCode int) {
	blasterError.errorCode = errorCode
}

type Error404 struct {
	blasterError
}

type Error400 struct {
	blasterError
}

type Error409 struct {
	blasterError
}

type Error500 struct {
	blasterError
}

func NewNetworkError(errorMsg string, networkError NetworkError) NetworkError {
	networkError.setErrorMessage(errorMsg)
	switch networkError.(type) {
	case *Error500:
		networkError.setErrorCode(500)
	case *Error404:
		networkError.setErrorCode(404)
	case *Error400:
		networkError.setErrorCode(400)
	case *Error409:
		networkError.setErrorCode(409)
	default:
		networkError.setErrorCode(500)
	}
	return networkError
}

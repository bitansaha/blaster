package networkerrors

type NetworkError interface {
	setErrorMessage(errorMessage string)
	Error() string
}

type blasterError struct {
	message string
}

func (blasterError *blasterError) Error() string {
	return blasterError.message
}

func (blasterError *blasterError) setErrorMessage(errorMessage string) {
	blasterError.message = errorMessage
}

type Error404 struct {
	blasterError
}

type Error500 struct {
	blasterError
}

func NewNetworkError(errorMsg string, networkError NetworkError) error {
	networkError.setErrorMessage(errorMsg)
	return networkError
}

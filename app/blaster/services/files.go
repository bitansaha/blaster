package services

import (
	"bytes"
	"io"
)

func getNumberOfRows(reader io.Reader) (int, error) {
	dataBuffer := make([]byte, 10*1024)
	lineCounter := 0
	lineDelimiter := []byte{'\n'}

	for {
		data, err := reader.Read(dataBuffer)
		lineCounter += bytes.Count(dataBuffer[:data], lineDelimiter)

		switch {
		case err == io.EOF:
			return lineCounter, nil

		case err != nil:
			return lineCounter, err
		}
	}
}

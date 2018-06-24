package services

import (
	"bytes"
	"io"
	"io/ioutil"
	"os"
	"path/filepath"
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

func copy(src, dest string) (err error) {
	// Registering cleanup function
	defer func() {
		if err != nil {
			os.RemoveAll(dest)
		}
	}()

	if _, err = os.Stat(src); os.IsNotExist(err) {
		return
	}

	if _, err = os.Stat(dest); os.IsNotExist(err) {
		return
	}

	srcDirectoryFileInfos, err := ioutil.ReadDir(src)
	if err != nil {
		return
	}

	for _, srcFileInfo := range srcDirectoryFileInfos {
		if !srcFileInfo.IsDir() {
			destFilePath := filepath.Join(dest, srcFileInfo.Name())
			destFile, err := os.Create(destFilePath)
			if err != nil {
				return err
			}
			defer destFile.Close()

			srcFilePath := filepath.Join(src, srcFileInfo.Name())
			srcFile, err := os.Open(srcFilePath)
			if err != nil {
				return err
			}
			defer srcFile.Close()

			_, err = io.Copy(destFile, srcFile)
			if err != nil {
				return err
			}
		}
	}
	return
}

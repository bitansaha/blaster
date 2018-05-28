package services

import (
	"errors"
	"io/ioutil"

	"github.com/bitansaha/blaster/app/config"
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

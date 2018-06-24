package blaster

import (
	"log"
	"os"

	"github.com/bitansaha/blaster/app/config"
)

func init() {
	blasterConfig := config.GetBlasterConfiguration()
	validateConfig(blasterConfig)
}

func validateConfig(blasterConfig config.BlasterConfig) {
	if _, err := os.Stat(blasterConfig.DataLocation); os.IsNotExist(err) {
		log.Println("Creating the data directory at - " + blasterConfig.DataLocation)
		os.MkdirAll(blasterConfig.DataLocation, os.ModePerm)
	}

	if _, err := os.Stat(blasterConfig.TempLocation); os.IsNotExist(err) {
		log.Println("Creating the temp directory at - " + blasterConfig.TempLocation)
		os.MkdirAll(blasterConfig.TempLocation, os.ModePerm)
	}
}

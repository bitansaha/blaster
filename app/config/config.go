package config

import (
	"bytes"
	"flag"
	"io/ioutil"

	"gopkg.in/yaml.v2"
)

const (
	dataDirectoryPath = "conf"
	pathSeperator     = '/'
	dataDirectoryName = "blaster.yml"
)

type BlasterConfig struct {
	DataLocation string `yaml:"data_location"`
}

var config BlasterConfig

func init() {
	config = BlasterConfig{}
	loadConfig(&config)
}

func loadConfig(config *BlasterConfig) {
	configFilePath := getConfigFilePath()
	configFile, err := ioutil.ReadFile(configFilePath)
	if err != nil {
		panic("Failed to read Blaster config - " + configFilePath)
	}

	err = yaml.Unmarshal(configFile, config)

	if err != nil {
		panic("Failed to unmarshal Blaster config - " + configFilePath)
	}
}

func getConfigFilePath() string {
	var dataPathConstructor bytes.Buffer

	ddp := *flag.String("dataDirectoryPath", dataDirectoryPath, "Data Directory Path")
	ddn := *flag.String("dataDirectoryName", dataDirectoryName, "Data Directory Name")

	dataPathConstructor.WriteString(ddp)
	if ddp[len(ddp)-1:][0] != pathSeperator {
		dataPathConstructor.WriteByte(pathSeperator)
	}
	dataPathConstructor.WriteString(ddn)
	return dataPathConstructor.String()
}

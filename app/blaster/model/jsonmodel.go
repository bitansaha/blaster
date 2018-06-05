package model

type TestJSON struct {
	TestDefinition TestDefinitionJSON `json:"testDefinition"`
	ExecutionPlan  ExecutionPlanJSON  `json:"executionPlan"`
}

type TestDefinitionJSON struct {
	TestName       string `json:"testName"`
	UserCount      int64  `json:"userCount"`
	RampUpDuration int64  `json:"rampUpDuration"`
	RepeatCount    int64  `json:"repeatCount"`
}

type ExecutionPlanJSON struct {
	BaseUrl   string         `json:"baseUrl"`
	Headers   []HeaderJSON   `json:"headers"`
	Scenarios []ScenarioJSON `json:"scenarios"`
}

type HeaderJSON struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}

type ScenarioJSON struct {
	Name                string   `json:"name"`
	FileName            string   `json:"fileName"`
	DataFileColumnNames []string `json:"dataFileColumnNames"`
	RequestMethodType   string   `json:"requestMethodType"`
	RequestPath         string   `json:"requestPath"`
	RequestBody         string   `json:"requestBody"`
}

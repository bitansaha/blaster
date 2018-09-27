import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap';
import ExecutionPlan from './ExecutionPlan'
import TestPanel from './TestPanel'
import TestDefinitionForm from './TestDefinitionForm'

class MainComponent extends Component {

  constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
      this.testDefinationUpdate = this.testDefinationUpdate.bind(this);
      this.saveData = this.saveData.bind(this);
      this.run = this.run.bind(this);
      this.state = {
        isSelected: true,
        isSave: false,
        isRun: false,
        testDefinationData: {
          testName: "",
          userCount: 0,
          rampUpDuration: 0,
          repeatCount: 0
        },
        executionPlanData: {
          baseUrl: "",
          headers: [],
          scenarios: []
        }
      };
  }

  handleOnSelect() {
      this.setState({isSelected: !this.state.isSelected});
  }

  testDefinationUpdate(testDefinationData) {
    if (!testDefinationData.testName || 0 === testDefinationData.testName.length) {
      this.setState({
        isSave: false,
        testDefinationData: testDefinationData
      });
    } else {
      this.setState({
        isSave: true,
        isRun: false,
        testDefinationData: testDefinationData
      });
    }

  }

  saveData() {
    alert("Saving Data")
    // TODO: Verify the overall state of all Data before marking isRun as true
    this.setState({
      isSave: false,
      isRun: true
    });
  }

  run() {
    alert("Running")
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={3}>
              <TestPanel handleOnSelect={this.handleOnSelect} isSelected={this.state.isSelected}
              isSave={this.state.isSave} saveData={this.saveData} isRun={this.state.isRun} run={this.run}/>
          </Col>
          <Col sm={7}>
            {this.state.isSelected ? (
              <TestDefinitionForm testDefinationData={this.state.testDefinationData} testDefinationUpdate={this.testDefinationUpdate}/>
            ) : (
              <ExecutionPlan executionPlanData={this.state.executionPlanData}/>
            )}
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    );
  }
}

export default MainComponent;

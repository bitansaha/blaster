import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap';
import ExecutionPlan from './ExecutionPlan'
import TestPanel from './TestPanel'
import TestDefinitionForm from './TestDefinitionForm'

class MainComponent extends Component {

  constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
      this.state = {
        isSelected: true,
        testDefinationData: {
          testName: "",
          numberOfUser: 0,
          rampUpDuration: 0,
          repeatCount: 0
        },
        executionPlanData: {
          baseUrl: ""
        }
      };
  }

  handleOnSelect() {
      this.setState({isSelected: !this.state.isSelected});
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={3}>
              <TestPanel handleOnSelect={this.handleOnSelect} isSelected={this.state.isSelected}/>
          </Col>
          <Col sm={7}>
            {this.state.isSelected ? (
              <TestDefinitionForm testDefinationData={this.state.testDefinationData}/>
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

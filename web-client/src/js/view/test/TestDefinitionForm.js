import React, { Component } from 'react';
import { Row, Col, div, form, FormGroup, FormControl, ControlLabel, Panel} from 'react-bootstrap';

class TestDefinitionForm extends Component {

  render() {
    return (

      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h4">Test Fields</Panel.Title>
              </Panel.Heading>
              <Panel.Body style={{'max-height':'72vh', 'overflow-y': 'auto'}}>
                <form>
                  <FormGroup>
                    <ControlLabel>Test Name:</ControlLabel>
                    <FormControl type="text"
                      placeholder="Enter test name"
                      value={this.props.testDefinationData.testName}
                      onChange={(e)=>{
                        this.props.testDefinationData.testName = e.target.value;
                        this.props.testDefinationUpdate(this.props.testDefinationData);
                      }}
                    />
                    <p>{}</p>
                    <ControlLabel>Number of user:</ControlLabel>
                    <FormControl type="Number"
                      placeholder="Enter number of user"
                      value={this.props.testDefinationData.numberOfUser}
                      onChange={(e)=>{
                        this.props.testDefinationData.numberOfUser = e.target.value;
                        this.props.testDefinationUpdate(this.props.testDefinationData);
                      }}
                    />
                    <p>{}</p>
                    <ControlLabel>Ramp up duration:</ControlLabel>
                    <FormControl type="Number"
                      placeholder="Enter ramp up duration"
                      value={this.props.testDefinationData.rampUpDuration}
                      onChange={(e)=>{
                        this.props.testDefinationData.rampUpDuration = e.target.value;
                        this.props.testDefinationUpdate(this.props.testDefinationData);
                      }}
                    />
                    <p>{}</p>
                    <ControlLabel>Repeat count:</ControlLabel>
                    <FormControl type="Number"
                      placeholder="Enter repeat count"
                      value={this.props.testDefinationData.repeatCount}
                      onChange={(e)=>{
                        this.props.testDefinationData.repeatCount = e.target.value;
                        this.props.testDefinationUpdate(this.props.testDefinationData);
                      }}
                    />
                  </FormGroup>
                </form>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </div>

    );
  }
}

export default TestDefinitionForm;

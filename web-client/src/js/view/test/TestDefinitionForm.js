import React, { Component } from 'react';
import { Row, Col, div, form, FormGroup, FormControl, ControlLabel, Panel} from 'react-bootstrap';
import GridHeader from '../../grid/GridHeader'

class TestDefinitionForm extends Component {

  constructor(props) {
      super(props);

      this.state = {
        testDefinationData: props.testDefinationData
      };
  }

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
                      value={this.state.testDefinationData.testName}
                      onChange={(e)=>{
                        this.state.testDefinationData.testName = e.target.value;
                        this.setState({testDefinationData: this.state.testDefinationData})
                      }}
                    />
                    <p>{}</p>
                    <ControlLabel>Number of user:</ControlLabel>
                    <FormControl type="Number"
                      placeholder="Enter number of user"
                      value={this.state.testDefinationData.numberOfUser}
                      onChange={(e)=>{
                        this.state.testDefinationData.numberOfUser = e.target.value;
                        this.setState({testDefinationData: this.state.testDefinationData})
                      }}
                    />
                    <p>{}</p>
                    <ControlLabel>Ramp up duration:</ControlLabel>
                    <FormControl type="Number"
                      placeholder="Enter ramp up duration"
                      value={this.state.testDefinationData.rampUpDuration}
                      onChange={(e)=>{
                        this.state.testDefinationData.rampUpDuration = e.target.value;
                        this.setState({testDefinationData: this.state.testDefinationData})
                      }}
                    />
                    <p>{}</p>
                    <ControlLabel>Repeat count:</ControlLabel>
                    <FormControl type="Number"
                      placeholder="Enter repeat count"
                      value={this.state.testDefinationData.repeatCount}
                      onChange={(e)=>{
                        this.state.testDefinationData.repeatCount = e.target.value;
                        this.setState({testDefinationData: this.state.testDefinationData})
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

import React, { Component } from 'react';
import { Row, Col, div, form, FormGroup, FormControl, ControlLabel, Panel} from 'react-bootstrap';
import GridHeader from '../../grid/GridHeader'
import CustomButton from '../../common/button/CustomButton';

class TestDefinitionForm extends Component {

  render() {
    return (

      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h4">Execution Plan</Panel.Title>
              </Panel.Heading>
              <Panel.Body style={{'max-height':'72vh', 'overflow-y': 'auto'}}>
                <form>
                  <FormGroup>
                    <ControlLabel>Base URL:</ControlLabel>
                    <FormControl type="text"
                      placeholder="Enter base URL"
                    />
                    <p>{}</p>
                    <Row>
                      <Col md={6}>
                        <CustomButton buttonName="Add Headers" buttonFunction={()=>alert("Add Headers")}/>
                      </Col>
                      <Col md={6}>
                        <CustomButton buttonName="Add Scenario" buttonFunction={()=>alert("Add Scenario's")}/>
                      </Col>
                    </Row>
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

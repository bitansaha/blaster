import React, { Component } from 'react';
import { Row, Col, div, form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import GridHeader from '../../grid/GridHeader'
import CustomButton from '../../common/button/CustomButton';

class TestDefinitionForm extends Component {

  render() {
    return (
      <div className='panel panel-default'>
        <GridHeader headerName='Execution Plan'/>
        <Row fluid style={{ paddingLeft: 15 }}>
          <Col md={2}>
          </Col>
          <Col md={8}>
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
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    );
  }
}

export default TestDefinitionForm;

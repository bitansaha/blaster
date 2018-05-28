import React, { Component } from 'react';
import { Row, Col, div, form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import GridHeader from '../../gridHeader/GridHeader'

class TestDefinitionForm extends Component {

  render() {
    return (
      <div className='panel panel-default'>
        <GridHeader />
        <Row fluid style={{ paddingLeft: 15 }}>
          <Col md={2}>
          </Col>
          <Col md={8}>
            <form>
              <FormGroup>
                <ControlLabel>Test Name:</ControlLabel>
                <FormControl type="text" placeholder="Enter test name"/>
                <p>{}</p>
                <ControlLabel>Number of user:</ControlLabel>
                <FormControl type="Number" placeholder="Enter number of user"/>
                <p>{}</p>
                <ControlLabel>Ramp up duration:</ControlLabel>
                <FormControl type="Number" placeholder="Enter ramp up duration"/>
                <p>{}</p>
                <ControlLabel>Repeat count:</ControlLabel>
                <FormControl type="Number" placeholder="Enter repeat count"/>
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

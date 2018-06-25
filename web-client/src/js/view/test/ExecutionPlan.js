import React, { Component } from 'react';
import { Row, Col, div} from 'react-bootstrap';
import GridHeader from '../../grid/GridHeader'

class TestDefinitionForm extends Component {

  render() {
    return (
      <div className='panel panel-default'>
        <GridHeader headerName='Execution Plan'/>
        <Row fluid style={{ paddingLeft: 15 }}>
          <Col md={2}>
          </Col>
          <Col md={8}>
            <p>Execution plan</p>
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    );
  }
}

export default TestDefinitionForm;

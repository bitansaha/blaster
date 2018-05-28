import React, { Component } from 'react';
import { div, Col, Row } from 'react-bootstrap';
import BasicHeader from '../../common/commonHeader/BasicHeader'
import BasicFooter from '../../common/commonFooter/BasicFooter'
import TestDefinitionPanel from './TestDefinitionPanel'
import TestDefinitionForm from './TestDefinitionForm'

class TestDefinition extends Component {

  render() {
    return (
      <div>
        <BasicHeader />
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <TestDefinitionPanel />
          </Col>
          <Col md={7}>
            <TestDefinitionForm />
          </Col>
          <Col md={1}></Col>
        </Row>
        <BasicFooter />
      </div>
    );
  }
}

export default TestDefinition;

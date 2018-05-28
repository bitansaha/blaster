import React, { Component } from 'react';
import { Row, Col, div} from 'react-bootstrap';
import TestListPanel from './TestListPanel'
import CreateTestPanel from './CreateTestPanel'
import ResultPanel from './ResultPanel'

class HomePage extends Component {

  render() {
    return (
      <div fluid style={{ marginTop: 1}}>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <TestListPanel />
          </Col>

          <Col md={7}>
            <CreateTestPanel />
            <ResultPanel />
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;

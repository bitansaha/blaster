import React, { Component } from 'react';
import { Row, Col, div, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import GridHeader from '../gridHeader/GridHeader'

class UpperPanel extends Component {

  render() {
    return (
      <div className='panel panel-default'>
        <Row>
          <Col md={12}>
            <GridHeader />
            <h4 fluid style={{ paddingLeft: 15 }}>Documentation:</h4>
            <h1>{}</h1>
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <div>
                  <Button onclick="createTest()" bsStyle="primary" bsSize="large" block>
                    Create Test
                  </Button>
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
            <p>{}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UpperPanel;

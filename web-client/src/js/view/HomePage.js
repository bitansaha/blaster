import React, { Component } from 'react';
import { Row, Col, Well, div, Button, ListGroup, ListGroupItem, ButtonToolbar} from 'react-bootstrap';
import GridHeader from '../gridHeader/GridHeader'
import BasicFooter from '../common/commonFooter/BasicFooter'
import LeftPanel from './LeftPanel'
import UpperPanel from './UpperPanel'
import LowerPanel from './LowerPanel'

class HomePage extends Component {

  render() {
    return (
      <div fluid style={{ marginTop: 1}}>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <LeftPanel />
          </Col>

          <Col md={7}>
            <UpperPanel />
            <LowerPanel />
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;

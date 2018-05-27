import React, { Component } from 'react';
import { Row, Col, div, ListGroup, ListGroupItem} from 'react-bootstrap';
import GridHeader from '../gridHeader/GridHeader'

class LowerPanel extends Component {

  render() {
    return (
      <div className='panel panel-default'>
        <Row>
          <Col md={12}>
            <GridHeader />
          </Col>
        </Row>
      </div>
    );
  }
}

export default LowerPanel;

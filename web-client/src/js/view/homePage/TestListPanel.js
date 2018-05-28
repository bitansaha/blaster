import React, { Component } from 'react';
import { Row, Col, div, ListGroup, ListGroupItem} from 'react-bootstrap';
import GridHeader from '../../gridHeader/GridHeader'

class TestListPanel extends Component {

  render() {
    return (
      <div className='panel panel-default'>
        <Row>
          <Col md={12}>
            <GridHeader />
            <ListGroup fluid style={{ paddingLeft: 15,  paddingRight: 15}}>
              <ListGroupItem><a href="#test1">Test 1</a></ListGroupItem>
              <ListGroupItem><a href="#test2">Test 2</a></ListGroupItem>
              <ListGroupItem>...</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestListPanel;

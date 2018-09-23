import React, { Component } from 'react';
import { Row, Col, div, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import GridHeader from '../../grid/GridHeader'

class TestListPanel extends Component {

  constructor(props){
    super(props);
    this.getList = this.getList.bind(this);
  }

  getList(list) {
    const listItems = list.map((name) =>
      <ListGroupItem><b>{name}</b></ListGroupItem>
    );
    return (
      <ListGroup fluid style={{ paddingLeft: 15,  paddingRight: 15}}>{listItems}</ListGroup>
    );
  }

  render() {
    return (
      <div >
        <Row >
          <Col md={12} >
            <Panel >
              <Panel.Heading>
                <Panel.Title componentClass="h4">Test List</Panel.Title>
              </Panel.Heading>
              <Panel.Body style={{height:'64vh', 'overflow-y': 'auto'}}>{this.getList(this.props.list)}</Panel.Body>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestListPanel;

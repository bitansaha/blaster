import React, { Component } from 'react';
import { Row, Col, div, ListGroup, ListGroupItem, li} from 'react-bootstrap';
import GridHeader from '../../gridHeader/GridHeader'

class TestListPanel extends Component {

  constructor(props){
    super(props);
    this.getList = this.getList.bind(this);
  }

  getList(list) {
    const listItems = list.map((name) =>
      <ListGroupItem>{name}</ListGroupItem>
    );
    return (
      <ListGroup fluid style={{ paddingLeft: 15,  paddingRight: 15}}>{listItems}</ListGroup>
    );
  }

  render() {
    return (
      <div className='panel panel-default'>
        <Row>
          <Col md={12}>
            <GridHeader headerName='Test List'/>
            {this.getList(this.props.list)}
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestListPanel;

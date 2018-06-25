import React, { Component } from 'react';
import { Row, Col, div, Nav, NavItem } from 'react-bootstrap';
import GridHeader from '../../grid/GridHeader'

class TestPanel extends Component {

  render() {
    return (
      <div className='panel panel-default'>
        <GridHeader headerName='Test Scenarios'/>
        <Row fluid style={{ paddingLeft: 15,  paddingRight: 15, paddingBottom: 15 }}>
          <Col md={12}>
            <Nav bsStyle="pills" stacked>
              <NavItem className={this.props.isSelected? "nav-link active" : ""} onClick={this.props.handleOnSelect} isSelected={this.props.isSelected}>
                Test Defination
              </NavItem>
              <NavItem className={this.props.isSelected? "" : "nav-link active"} onClick={this.props.handleOnSelect}>
                Execution Plan
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestPanel;

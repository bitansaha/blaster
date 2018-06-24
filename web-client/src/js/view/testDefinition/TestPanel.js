import React, { Component } from 'react';
import { Row, Col, div, form, FormGroup, FormControl, ControlLabel, Nav, NavItem } from 'react-bootstrap';
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import TestDefinitionPanel from './TestDefinitionPanel'
import TestDefinitionForm from './TestDefinitionForm'
import GridHeader from '../../gridHeader/GridHeader'

class TestPanel extends Component {

  constructor(props) {
    super(props);
  }

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

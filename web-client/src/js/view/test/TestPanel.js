import React, { Component } from 'react';
import { Row, Col, div, Nav, NavItem, Panel } from 'react-bootstrap';
import GridHeader from '../../grid/GridHeader'

class TestPanel extends Component {

  render() {
    return (

      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h4">Test Scenarios</Panel.Title>
              </Panel.Heading>
              <Panel.Body style={{'height':'72vh'}}>
                <Nav bsStyle="pills" stacked>
                  <NavItem className={this.props.isSelected? "nav-link active" : ""} onClick={this.props.handleOnSelect} isSelected={this.props.isSelected}>
                    Test Defination
                  </NavItem>
                  <NavItem className={this.props.isSelected? "" : "nav-link active"} onClick={this.props.handleOnSelect}>
                    Execution Plan
                  </NavItem>
                </Nav>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </div>

    );
  }

}

export default TestPanel;

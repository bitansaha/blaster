import React, { Component } from 'react';
import { Col, Row, Nav, NavItem } from 'react-bootstrap';
import GridHeader from '../../gridHeader/GridHeader'

class TestDefinition extends Component {

  handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
  }

  render() {
    return (
      <div className='panel panel-default'>
        <GridHeader />
        <Row fluid style={{ paddingLeft: 15,  paddingRight: 15, paddingBottom: 15 }}>
          <Col md={12}>
            <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={1}>
                Test Definition
              </NavItem>
              <NavItem eventKey={2}>
                Execution Plan
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestDefinition;

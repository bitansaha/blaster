import React, { Component } from 'react';
import {Navbar, Col, Row } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <Navbar fluid style={{ paddingLeft: 15}}>
              <Navbar.Header>
                <Navbar.Brand>
                  <a>Blaster</a>
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { Panel, Navbar, Col, Row } from 'react-bootstrap';

class BasicHeader extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <Navbar>
              <Navbar.Header fluid style={{ paddingLeft: 15}} className=" navbar-fixed-top">
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

export default BasicHeader;

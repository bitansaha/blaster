import React, { Component } from 'react';
import {Navbar, Row, Col} from 'react-bootstrap';

class Footer extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
          <Navbar className="navbar-fixed-bottom">
          </Navbar>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;

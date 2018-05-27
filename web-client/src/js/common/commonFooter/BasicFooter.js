import React, { Component } from 'react';
import { Panel, Navbar, div, Col, footer, Row } from 'react-bootstrap';

class BasicFooter extends Component {

  render() {
    return (
      <Navbar fluid style={{ paddingLeft: 15}} className="navbar-fixed-bottom" >
        Footer
      </Navbar>
    );
  }
}

export default BasicFooter;

import React, { Component } from 'react';
import {Navbar } from 'react-bootstrap';

class GridHeader extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <p>Grid Header</p>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default GridHeader;

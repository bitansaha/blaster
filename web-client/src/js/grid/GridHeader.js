import React, { Component } from 'react';
import {Navbar } from 'react-bootstrap';

class GridHeader extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <h4>{this.props.headerName}</h4>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default GridHeader;

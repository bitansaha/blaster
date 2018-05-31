import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {div, Button} from 'react-bootstrap';
import TestDefinition from '../../view/testDefinition/TestDefinition'

class CustomButton extends Component {

  constructor(props) {
    super(props);
    this.createTest = this.createTest.bind(this);
  }

  createTest() {
    ReactDOM.render(<TestDefinition />, document.getElementById('root'));
  }

  render() {
    return (
      <div>
        <Button onClick={this.createTest} bsStyle="primary" bsSize="large" block>
          Create Test
        </Button>
      </div>
    );
  }
}

export default CustomButton;

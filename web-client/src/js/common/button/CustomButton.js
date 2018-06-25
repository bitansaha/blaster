import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {div, Button} from 'react-bootstrap';
import MainComponent from '../../view/test/MainComponent';

class CustomButton extends Component {

  constructor(props){
    super(props);
    this.createTest = this.createTest.bind(this);
  }

  createTest(){
    ReactDOM.render(<MainComponent />, document.getElementById('root'));
  }

  render() {
    return (
      <div>
        <Button onClick={this.createTest} bsStyle="primary" bsSize="large" block>
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}

export default CustomButton;

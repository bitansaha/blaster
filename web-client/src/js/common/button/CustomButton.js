import React, { Component } from 'react';
import {div, Button} from 'react-bootstrap';

class CustomButton extends Component {

  constructor(props){
    super(props);

    const _buttonStyle = (props.buttonStyle ? props.buttonStyle : "primary")

    this.state = {
      buttonName: props.buttonName,
      buttonFunction: props.buttonFunction,
      buttonStyle: _buttonStyle
    }

    this.state.buttonFunction = this.state.buttonFunction.bind(this);
  }

  render() {
    return (
      <div>
        <Button onClick={this.state.buttonFunction} bsStyle={this.state.buttonStyle} block>
          {this.state.buttonName}
        </Button>
      </div>
    );
  }
}

export default CustomButton;

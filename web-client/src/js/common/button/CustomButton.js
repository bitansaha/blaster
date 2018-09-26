import React, { Component } from 'react';
import {div, Button} from 'react-bootstrap';

class CustomButton extends Component {

  constructor(props){
    super(props);

    this.getButtonStyle = this.getButtonStyle.bind(this);
    this.isButtonEnabled = this.isButtonEnabled.bind(this);
  }

  getButtonStyle() {
    return (this.props.buttonStyle ? this.props.buttonStyle : "primary");
  }

  isButtonEnabled() {
    return (this.props.enabled ? this.props.enabled : true);
  }

  render() {
    return (
      <div>
        {this.isButtonEnabled() ?
          (<Button onClick={this.props.buttonFunction} bsStyle={this.getButtonStyle()} block>
            {this.props.buttonName}
          </Button>)
          :
          (<Button onClick={this.props.buttonFunction} bsStyle={this.getButtonStyle()} block disabled>
            {this.props.buttonName}
          </Button>)
        }
      </div>
    );
  }
}

export default CustomButton;

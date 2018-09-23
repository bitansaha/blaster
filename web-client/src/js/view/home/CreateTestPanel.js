import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CustomButton from '../../common/button/CustomButton';
import MainComponent from '../test/MainComponent';

class CreateTestPanel extends Component {

  constructor(props){
    super(props);
    this.createTest = this.createTest.bind(this);
  }

  createTest(){
    ReactDOM.render(<MainComponent />, document.getElementById('root'));
  }

  render() {
    return (
      <CustomButton buttonName="Create Test" buttonFunction={this.createTest}/>
    );
  }
}

export default CreateTestPanel;

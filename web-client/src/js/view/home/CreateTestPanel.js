import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, div} from 'react-bootstrap';
import GridHeader from '../../grid/GridHeader';
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
      <div className='panel panel-default'>
        <Row>
          <Col md={12}>
            <GridHeader headerName='Create Test' />
            <h4 fluid style={{ paddingLeft: 15 }}>Documentation:</h4>
            <h1>{}</h1>
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <div>
                  <CustomButton buttonName="Create Test" buttonFunction={this.createTest}/>
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
            <p>{}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateTestPanel;

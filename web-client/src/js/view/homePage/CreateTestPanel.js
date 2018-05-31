import React, { Component } from 'react';
import { Row, Col, div} from 'react-bootstrap';
import GridHeader from '../../gridHeader/GridHeader'
import CustomButton from '../../common/button/CustomButton'

class CreateTestPanel extends Component {

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
                  <CustomButton />
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

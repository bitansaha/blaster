import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap';
import ExecutionPlan from './ExecutionPlan'
import TestPanel from './TestPanel'
import Header from '../../common/header/Header'
import TestDefinitionForm from './TestDefinitionForm'
import Footer from '../../common/footer/Footer'

class MainComponent extends Component {

  constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
      this.state = {
        isSelected: true,
        testDefinationData: {
          testName: "",
          numberOfUser: 0,
          rampUpDuration: 0,
          repeatCount: 0
        }
      };
  }

  handleOnSelect() {
      this.setState({isSelected: !this.state.isSelected});
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={3}>
              <TestPanel handleOnSelect={this.handleOnSelect} isSelected={this.state.isSelected}/>
          </Col>
          <Col sm={7}>
            {this.state.isSelected ? (
              <TestDefinitionForm testDefinationData={this.state.testDefinationData}/>
            ) : (
              <ExecutionPlan />
            )}
          </Col>
          <Col md={1}></Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default MainComponent;

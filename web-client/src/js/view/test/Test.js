import React, { Component } from 'react';
import { div, Col, Row } from 'react-bootstrap';
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import TestDefinitionPanel from './TestDefinitionPanel'
import TestDefinitionForm from './TestDefinitionForm'

class Test extends Component {

  constructor(props) {
      super(props);
      this.handleTestDefinationPanel = this.handleTestDefinationPanel.bind(this);
      this.handleExecutionPlanForm = this.handleExecutionPlanForm.bind(this);
      this.state = {isSelected: true};
    }

  handleTestDefinationPanel() {
      this.setState({isSelected: false});
    }

  handleExecutionPlanForm() {
    this.setState({isSelected: true});
  }

  render() {
    return (
      <div>
        <Header />
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <TestDefinitionPanel testDefinationPanel={this.handleTestDefinationPanel} />
          </Col>
          <Col md={7}>
            <TestDefinitionForm testDefinationForm={this.handleTestDefinationForm} />
          </Col>
          <Col md={1}></Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default Test;

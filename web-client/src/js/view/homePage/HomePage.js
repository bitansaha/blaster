import React, { Component } from 'react';
import { Row, Col, div} from 'react-bootstrap';
import CreateTestPanel from './CreateTestPanel';
import DeploymentConfiguration from './DeploymentConfiguration';
import TestListPanel from './TestListPanel';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/tests")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        })
  }

  render() {
    return (
      <div fluid style={{ marginTop: 1}}>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <TestListPanel list={this.state.items} />
          </Col>

          <Col md={7}>
            <CreateTestPanel />
            <DeploymentConfiguration />
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;

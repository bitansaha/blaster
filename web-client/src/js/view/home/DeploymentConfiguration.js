import React, { Component } from 'react';
import { Row, Col, div, Panel} from 'react-bootstrap';
import GridHeader from '../../grid/GridHeader'

class DeploymentConfiguration extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h4">Deployment Configuration</Panel.Title>
              </Panel.Heading>
              <Panel.Body style={{'max-height':'72vh', 'overflow-y': 'auto'}}>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }

}

export default DeploymentConfiguration;

import React, { Component } from 'react';
import { Row, Col, div} from 'react-bootstrap';
import GridHeader from '../../gridHeader/GridHeader'

class DeploymentConfiguration extends Component {

  render() {
    return (
      <div className='panel panel-default'>
        <Row>
          <Col md={12}>
            <GridHeader headerName='Deployment Configuration'/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DeploymentConfiguration;

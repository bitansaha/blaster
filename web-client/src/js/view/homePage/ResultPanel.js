import React, { Component } from 'react';
import { Row, Col, div} from 'react-bootstrap';
import GridHeader from '../../gridHeader/GridHeader'

class ResultPanel extends Component {

  render() {
    return (
      <div className='panel panel-default'>
        <Row>
          <Col md={12}>
            <GridHeader />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultPanel;

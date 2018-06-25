import React, { Component } from 'react';
import { Col, Row, Nav, NavItem} from 'react-bootstrap';
import GridHeader from '../../grid/GridHeader'
import Test from './Test'

class TestDefinitionPanel extends Component {

  constructor(props){
    super(props);
    this.testDefinationPanel = this.props.testDefinationPanel.bind(this);
    this.handleExecutionPlanForm = this.handleExecutionPlanForm.bind(this);
    this.state = {isClicked: true};
  }

  render() {
    this.setState({isClicked: true});
    if (this.isClicked) {
       this.definationPanel = <Test isClicked={this.handleTestDefinationPanel} />;
     } else {
       this.definationForm = <Test isClicked={this.handleExecutionPlanForm} />
     }

    return (
      <div className='panel panel-default'>
        <GridHeader headerName='Test Scenarios'/>
        <Row fluid style={{ paddingLeft: 15,  paddingRight: 15, paddingBottom: 15 }}>
          <Col md={12}>
            <Nav bsStyle="pills" stacked>
              <NavItem className="nav-link active">
                {this.definationPanel}
              </NavItem>
              <NavItem>
                {this.definationForm}
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestDefinitionPanel;

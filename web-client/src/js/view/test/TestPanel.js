import React, { Component } from 'react';
import { Row, Col, div, Nav, NavItem, Panel, Button, Glyphicon } from 'react-bootstrap';

class TestPanel extends Component {

  render() {

    return (

      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h4">Test Scenarios</Panel.Title>
              </Panel.Heading>
              <Panel.Body style={{'height':'72vh'}}>
                <Nav bsStyle="pills" stacked>
                  <NavItem className={this.props.isSelected? "nav-link active" : ""} onClick={this.props.handleOnSelect} isSelected={this.props.isSelected}>
                    Test Defination
                  </NavItem>
                  <NavItem className={this.props.isSelected? "" : "nav-link active"} onClick={this.props.handleOnSelect}>
                    Execution Plan
                  </NavItem>
                </Nav>
                <p>{}</p>
                {this.props.isRun ?
                (<Button onClick={this.props.run} style={{'margin-top': '40vh'}} bsSize="large" bsStyle="success" block>
                  <Glyphicon glyph="play-circle" /> Run
                </Button>)
                :
                (<Button onClick={this.props.run} style={{'margin-top': '40vh'}} bsSize="large" bsStyle="danger" block disabled>
                    <Glyphicon glyph="play-circle" /> Run
                </Button>)
                }
                <p>{}</p>
                {this.props.isSave ?
                (<Button onClick={this.props.saveData} bsStyle="success" block>
                  Save
                </Button>)
                :
                (<Button onClick={this.props.saveData} bsStyle="warning" block disabled>
                  Save
                </Button>)
                }
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </div>

    );
  }

}

export default TestPanel;

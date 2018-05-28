import React, { Component } from 'react';
import {div} from 'react-bootstrap';
import HomePage from './view/homePage/HomePage'
import BasicFooter from './common/commonFooter/BasicFooter'
import BasicHeader from './common/commonHeader/BasicHeader'

class App extends Component {

  render() {
    return (
      <div>
        <BasicHeader />
        <HomePage />
        <BasicFooter />
      </div>
    );
  }
}
export default App;

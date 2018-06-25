import React, { Component } from 'react';
import {div} from 'react-bootstrap';
import HomePage from './view/home/HomePage'
import Footer from './common/footer/Footer'
import Header from './common/header/Header'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}
export default App;

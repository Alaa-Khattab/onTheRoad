import React, { Component } from 'react';
import Header from './templates/header.jsx';
import HomePage from './homePage/home_page.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <HomePage />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './assets/styles/style.scss';
import Groceries from './groceries';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Groceries />
      </div>
    );
  }
}

export default App;

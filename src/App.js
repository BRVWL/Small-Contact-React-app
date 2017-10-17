import React, { Component } from 'react';
import './assets/styles/style.scss';
import List from './components/List';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <List contacts={data.contacts} />
      </div>
    );
  }
}

export default App;

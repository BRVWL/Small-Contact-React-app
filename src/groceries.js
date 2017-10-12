import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import List from './containers/List';
import Header from './containers/Header';
import Footer from './containers/Footer';

class Groceries extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="containers">
          <Header />
          <List />
          <Footer />
        </div>

      </Provider>
    );
  }
}

export default Groceries;

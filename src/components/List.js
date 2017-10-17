import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';

class List extends Component {
  state = {
    searchTerm: ''
  };
  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
  render() {
    return (
      <div className="list">
        <Header searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} />
        {this.props.contacts
          .filter(contact => `${contact.name}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map(contact => <Item key={contact.name} {...contact} />)}
      </div>
    );
  }
}

export default List;

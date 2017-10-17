import React from 'react';

const Header = props => (
  <header className="search">
    <input type="text" onChange={props.handleSearchTermChange} value={props.searchTerm} placeholder="Search" />
  </header>
);

Header.defaultProps = {
  handleSearchTermChange: function noop() {},
  searchTerm: ''
};

export default Header;

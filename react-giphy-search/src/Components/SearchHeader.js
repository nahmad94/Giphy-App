import React from 'react';
import './SearchHeader.css';
import logo from '../giphy-searcher-logo.svg';

function SearchHeader({ lastSearch }) {
  return (
    <header>
        <div className="brand">
            <img src={logo} alt="logo" />
            <h1>Giphy Searcher</h1>
        </div>
      <p className="muted">
        Showing results for <strong>{lastSearch}</strong>
      </p>
    </header>
  );
}
export default SearchHeader;
import React from 'react';

import { AppContext } from '../Provider/Provider';
import './SearchField.css';

const SearchField = () => (
  <AppContext.Consumer>
    {({ callbacks, state }) => (
      <input
        placeholder="Enter your search term"
        className="search-bar"
        value={state.anchor}
        onChange={callbacks.handleSearch}
      />
    )}
  </AppContext.Consumer>
);

export default SearchField;

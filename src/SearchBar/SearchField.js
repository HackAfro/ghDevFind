import React from 'react';
import PropTypes from 'prop-types';

import './SearchField.css';

const SearchField = ({ filterTerm, onChange }) => (
  <input
    placeholder="Enter your search term"
    className="search-bar"
    value={filterTerm}
    onChange={onChange}
  />
);

SearchField.propTypes = {
  filterTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchField;

import React from 'react';
import PropTypes from 'prop-types';
import SideBarForm from './SideBarForm/SideBarForm';

import './SideBar.css';

const SideBar = props => (
  <div className="gh-sidebar">
    <h3 className="filter-header">Filters</h3>
    <SideBarForm {...props} />
  </div>
);

SideBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  repoCount: PropTypes.objectOf(PropTypes.any).isRequired,
  followerCount: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SideBar;

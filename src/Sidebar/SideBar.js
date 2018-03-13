import React from 'react';
import SideBarForm from './SideBarForm/SideBarForm';

import './SideBar.css';

const SideBar = () => (
  <div className="gh-sidebar">
    <h3 className="filter-header">Filters</h3>
    <SideBarForm />
  </div>
);

export default SideBar;

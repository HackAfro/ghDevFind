import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => (
  <div style={{ textAlign: 'center' }}>
    <Link to="/" className="text-color">
      <h2>GHDevFind</h2>
    </Link>
    <p className="text-color sub-header">
      React tool for searching developers matching a language
    </p>
  </div>
);

export default AppHeader;

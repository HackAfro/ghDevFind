import React from 'react';
import PropTypes from 'prop-types';

import { TEXT_COLOR } from '../helpers/helper';

import './Spinner.css';

const GhSpinner = ({ color, size }) => (
  <div className="half-circle-spinner" style={{ height: size, width: size }}>
    <div
      className="circle circle-1"
      style={{
        color,
        border: `${size / 10} solid transparent`,
        borderTopColor: color,
      }}
    />
    <div
      className="circle circle-2"
      style={{
        color,
        border: `${size / 10} solid transparent`,
        borderBottomColor: color,
      }}
    />
  </div>
);

GhSpinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

GhSpinner.defaultProps = {
  color: TEXT_COLOR,
  size: '60px',
};

export default GhSpinner;

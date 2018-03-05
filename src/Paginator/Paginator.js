import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';

import { COLOR_CODE } from '../helpers/helper';

import './Paginator.css';

const Paginator = ({ direction, clickHandler, disabled }) => (
  <div className="paginator">
    {direction === 'left' ? (
      <button
        onClick={e => clickHandler(e, 'PREV')}
        className="pagination-button"
        disabled={!disabled}
      >
        <ChevronLeft className="prev" color={disabled ? `${COLOR_CODE}` : 'grey'} size={40} />
      </button>
    ) : (
      <button
        onClick={e => clickHandler(e, 'NEXT')}
        className="pagination-button"
        disabled={!disabled}
      >
        <ChevronRight className="next" color={disabled ? `${COLOR_CODE}` : 'grey'} size={40} />
      </button>
    )}
  </div>
);

Paginator.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Paginator.defaultProps = {
  disabled: true,
};

export default Paginator;

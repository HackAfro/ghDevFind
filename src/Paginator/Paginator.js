import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';

import { AppContext } from '../Provider/Provider';
import { COLOR_CODE } from '../helpers/helper';

import './Paginator.css';

const Paginator = ({ direction }) => (
  <div className="paginator">
    <AppContext.Consumer>
      {({ callbacks, state }) => (
        <React.Fragment>
          {direction === 'left' ? (
            <button
              onClick={e => callbacks.handlePagination(e, 'PREV')}
              className="pagination-button"
              disabled={!state.hasPrev}
            >
              <ChevronLeft
                className="prev"
                color={state.hasPrev ? `${COLOR_CODE}` : 'grey'}
                size={40}
              />
            </button>
          ) : (
            <button
              onClick={e => callbacks.handlePagination(e, 'NEXT')}
              className="pagination-button"
              disabled={!state.hasNext}
            >
              <ChevronRight
                className="next"
                color={state.hasNext ? `${COLOR_CODE}` : 'grey'}
                size={40}
              />
            </button>
          )}
        </React.Fragment>
      )}
    </AppContext.Consumer>
  </div>
);

Paginator.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default Paginator;

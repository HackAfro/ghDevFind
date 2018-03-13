import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import callbacks from '../helpers/actions';
import reducer from '../reducers/reducers';

export const AppContext = React.createContext();

class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      filterTerm: '',
      anchor: '',
      language: 'javascript',
      country: null,
      limit: 50,
      before: null,
      after: null,
      loadingRepos: true,
      hasNext: false,
      hasPrev: false,
      followerCount: {
        greaterThan: true,
      },
      repoCount: {
        greaterThan: true,
      },
      query: 'language:javascript followers:>1000 repos:>50',
    };
    this.handleSearch = callbacks.handleSearch.bind(this);
    this.makeSearch = debounce(callbacks.makeSearch, 1000);
    this.filterChangeHandler = reducer.bind(this);
    this.handlePagination = callbacks.handlePagination.bind(this);
    this.setPagInfo = this.setPagInfo.bind(this);
  }

  setPagInfo(data) {
    this.beforeAnchor = data.startCursor;
    this.afterAnchor = data.endCursor;
    this.setState({
      loadingRepos: false,
      hasNext: data.hasNextPage,
      hasPrev: data.hasPreviousPage,
    });
  }

  resetFilter() {
    this.setState({ filterTerm: '' });
  }

  render() {
    const value = {
      state: this.state,
      callbacks: {
        handleSearch: this.handleSearch,
        makeSearch: this.makeSearch,
        filterChangeHandler: this.filterChangeHandler,
        handlePagination: this.handlePagination,
        setPagInfo: this.setPagInfo,
      },
    };
    return <AppContext.Provider value={value}>{this.props.children}</AppContext.Provider>;
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

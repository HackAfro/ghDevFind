import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import UserListItem from './UserListItem/UserListItem';
import GhSpinner from '../Spinner/Spinner';
import { searchQuery, getHireableUsers, observable } from '../helpers/helper';

import './UserList.css';

class UserList extends React.Component {
  componentWillReceiveProps({ search: { pageInfo } }) {
    this.setPagInfo(pageInfo);
  }

  setPagInfo(pageInfo) {
    const event = {
      action: 'SET_PAGINATION_DATA',
      data: pageInfo,
    };
    observable.next(event);
  }

  render() {
    const {
      loading, error, search, variables,
    } = this.props;

    if (loading) {
      return (
        <div className="loading">
          <GhSpinner />
        </div>
      );
    }
    if (error) return <h1>Error</h1>;

    const { filterTerm } = variables;
    const hireableUsers = filterTerm ? search : getHireableUsers(search);

    return (
      <React.Fragment>
        { hireableUsers.edges.map(user => (
          <UserListItem item={user} key={user.node.id} />
        )) }
      </React.Fragment>
    );
  }
}

UserList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  search: PropTypes.objectOf(PropTypes.any),
  variables: PropTypes.objectOf(PropTypes.any).isRequired,
};

UserList.defaultProps = {
  error: false,
  search: {},
  loading: true,
};

export default graphql(searchQuery, {
  props: ({
    data: {
      loading, error, search, variables,
    },
  }) => (
    {
      loading,
      error,
      search,
      variables,
    }
  ),
  options: ({
    limit, query, filterTerm, before, after,
  }) => (
    filterTerm ? {
      variables: {
        query: `${filterTerm}`,
        limit,
        filterTerm,
        before,
        after,
      },
    } : {
      variables: {
        query,
        limit,
        filterTerm,
        before,
        after,
      },
    }
  ),
})(UserList);

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import GhSpinner from '../Spinner/Spinner';
import DetailsContent from './DetailsContent/DetailsContent';
import UserSideBar from './Sidebar/Sidebar';

import { userDetailsQuery, userAge } from '../helpers/helper';

import './UserDetailsBody.css';

const UserDetailsBody = ({
  loading, error, user,
}) => {
  if (loading) return <div className="loading"><GhSpinner /></div>;
  if (error) return <h1>Error</h1>;

  const sideData = {
    avatar: user.avatarUrl,
    username: user.login,
    bio: user.bio,
    company: user.company,
    email: user.email,
    createdAt: `${userAge(user.createdAt)} yrs`,
    location: user.location,
  };

  const mainData = {
    followers: user.followers.totalCount,
    following: user.following.totalCount,
    repos: user.repositories,
  };

  return (
    <div className="user-details">
      <UserSideBar user={sideData} />
      <DetailsContent body={mainData} />
    </div>
  );
};

UserDetailsBody.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  user: PropTypes.objectOf(PropTypes.any),
};

UserDetailsBody.defaultProps = {
  loading: true,
  error: false,
  user: {},
};

export default graphql(userDetailsQuery, {
  props: ({ data: { loading, error, user } }) => (
    {
      loading,
      error,
      user,
    }
  ),
  options: ({ repoOrder, login }) => (
    {
      variables: {
        repoOrder,
        login,
      },
    }
  ),
})(UserDetailsBody);

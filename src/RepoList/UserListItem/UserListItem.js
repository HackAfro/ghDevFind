import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import './UserListItem.css';
import UserListItemBody from './UserListItemBody';

const UserListItem = ({ item: { node } }) => {
  const body = {
    id: node.id,
    login: node.login,
    bio: node.bio,
    isHireable: node.isHireable,
    following: node.following || { totalCount: null },
    followers: node.followers || { totalCount: null },
    name: node.name,
  };

  return (
    <div className="list-item">
      <Link to={`/user/${node.login}`}>
        <img
          src={node.avatarUrl}
          alt={node.login}
          className="list-header__image"
        />
      </Link>
      <UserListItemBody body={body} />
    </div>
  );
};

UserListItem.fragments = {
  user: gql`
    fragment UserInfo on User {
      id
      login
      bio
      avatarUrl
      isHireable
      followers {
        totalCount
      }
      following {
        totalCount
      }
      name
      location
    }
  `,
};

UserListItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default UserListItem;

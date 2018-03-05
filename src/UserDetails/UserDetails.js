import React from 'react';
import PropTypes from 'prop-types';

import UserDetailsBody from './UserDetailsBody';

const UserDetails = ({ match }) => {
  const repoOrder = {
    field: 'STARGAZERS',
    direction: 'DESC',
  };
  return (
    <UserDetailsBody login={match.params.id} repoOrder={repoOrder} />
  );
};

UserDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default UserDetails;


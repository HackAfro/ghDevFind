import React from 'react';
import PropTypes from 'prop-types';
import { Users, UserCheck } from 'react-feather';

import Badge from '../../Badge/Badge';

const UserFollowing = ({ userDetails }) => (
  <div className="user-following">
    <Badge
      color="primary"
      text={userDetails.followers}
      icon={<Users className="icon" size={13} />}
      fontSize="11"
      title="Followers"
    />
    <Badge
      color="rgb(31, 150, 219)"
      text={userDetails.following}
      icon={<UserCheck className="icon" size={13} />}
      fontSize="11"
      title="Following"
    />
  </div>
);

UserFollowing.propTypes = {
  userDetails: PropTypes.shape({
    followers: PropTypes.number,
    following: PropTypes.number,
  }).isRequired,
};

export default UserFollowing;

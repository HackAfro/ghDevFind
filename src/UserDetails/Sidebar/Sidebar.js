import React from 'react';
import PropTypes from 'prop-types';

import { Mail, Calendar, MapPin, Briefcase } from 'react-feather';

const UserSideBar = ({ user }) => {
  const userInfo = [
    {
      icon: Mail,
      label: 'mail',
      value: user.email,
    },
    {
      icon: Calendar,
      label: 'Date Joined',
      value: user.createdAt,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: user.location,
    },
    {
      icon: Briefcase,
      label: 'Company',
      value: user.company,
    },
  ];
  return (
    <div className="user-sidebar">
      <div className="user-sidebar__body">
        <div className="user-sidebar__header">
          <img src={user.avatar} alt={user.login} className="user-sidebar__avatar" />
          <h4 className="user-sidebar__username"><span className="at">@</span>{ user.username }</h4>
          <p className="user-sidebar__bio">{ user.bio }</p>
        </div>
        <hr />
        <div className="user-sidebar__content">
          { userInfo.map(info => (
            <div className="user-sidebar__info" key={info.label}>
              <span className="icon" title={info.label}>
                {<info.icon size="20" color="grey" />}
              </span>
              <span className="value" title={info.label}>
                {info.value || 'N/A'}
              </span>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
};

UserSideBar.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
};

UserSideBar.defaultProps = {
  user: {},
};

export default UserSideBar;

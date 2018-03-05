import React from 'react';
import PropTypes from 'prop-types';

import './DetailsContent.css';
import RepoListItem from './RepoListItem/RepoListItem';

const BodyInfo = ({ value, label }) => (
  <div className="info">
    <span className="value">{ value }</span>
    <span className="label">{ label }</span>
  </div>
);

const DetailsContent = ({ body }) => (
  <div className="details-body">
    <div className="details-body__leading">
      <BodyInfo value={body.repos.totalCount} label="Repos" />
      <BodyInfo value={body.followers} label="Followers" />
      <BodyInfo value={body.following} label="Following" />
    </div>
    <div className="details-body__content">
      {body.repos.nodes.map(repo => <RepoListItem repo={repo} key={repo.id} />)}
    </div>
  </div>
);

BodyInfo.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

DetailsContent.propTypes = {
  body: PropTypes.shape({
    followers: PropTypes.string,
    following: PropTypes.string,
    repos: PropTypes.object,
  }),
};

DetailsContent.defaultProps = {
  body: {},
};

export default DetailsContent;

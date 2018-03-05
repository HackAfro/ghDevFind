import React from 'react';
import PropTypes from 'prop-types';
import { Star, ExternalLink } from 'react-feather';

import Badge from '../../../Badge/Badge';

import './RepoListItem.css';

const RepoListItem = ({ repo }) => (
  <div className="repo-con">
    <div className="repo-desc">
      <h3 title={repo.name}>
        { repo.name }
      </h3>
      <p>{ repo.description }
      </p>
    </div>
    <div className="repo-icons">
      <div className="repo-stars info">
        <Star size={18} title="Stars" className="star" />
        <span>{ repo.stargazers.totalCount }</span>
      </div>
      <div className="repo-lang info">
        { repo.primaryLanguage &&
          <Badge
            color={repo.primaryLanguage.color}
            text={repo.primaryLanguage.name}
            fontSize={11}
            fontWeight={500}
            uppercase={false}
            title="Repo's Primary Language"
          />
        }
      </div>
      <div className="external-link info">
        { repo.homepageUrl &&
          <a href={repo.homepageUrl} title="View the repo's homepage" target="_blank">
            <ExternalLink size={18} color="gray" />
          </a> }
      </div>
    </div>
  </div>
);

RepoListItem.propTypes = {
  repo: PropTypes.objectOf(PropTypes.any),
};

RepoListItem.defaultProps = {
  repo: {},
};

export default RepoListItem;

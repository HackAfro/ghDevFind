import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchField from '../SearchBar/SearchField';

import SideBar from '../Sidebar/SideBar';
import RepoList from '../RepoList/UserList';
import Paginator from '../Paginator/Paginator';

import { observable } from '../helpers/helper';
import reducer from '../reducers/reducers';

class AppBody extends Component {
  constructor() {
    super();
    this.state = {
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
    this.onChange = reducer.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    observable.subscribe({
      next: (event) => {
        if (event.action === 'SET_PAGINATION_DATA') {
          this.beforeAnchor = event.data.startCursor;
          this.afterAnchor = event.data.endCursor;
          this.setState({
            loadingRepos: false,
            hasNext: event.data.hasNextPage,
            hasPrev: event.data.hasPreviousPage,
          });
        }
      },
    });
  }

  componentWillUnmount() {
    observable.unsubscribe();
  }

  clickHandler(e, action) {
    if (action === 'NEXT') {
      this.setState({
        after: this.afterAnchor,
        before: this.beforeAnchor,
        loadingRepos: true,
      });
    } else {
      this.setState({
        before: this.beforeAnchor,
        after: this.afterAnchor,
        loadingRepos: true,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: 'center' }}>
          <SearchField filterTerm={this.props.anchorTerm} onChange={this.props.onChange} />
        </div>
        <section className="app-body">
          <SideBar
            language={this.state.language}
            country={this.state.country}
            repoCount={this.state.repoCount}
            followerCount={this.state.followerCount}
            limit={this.state.limit}
            onChange={this.onChange}
          />
          <div className="result-section">
            {!this.state.loadingRepos && (
              <Paginator
                direction="left"
                clickHandler={this.clickHandler}
                disabled={this.state.hasPrev}
              />
            )}
            <div className="user-list">
              <RepoList
                {...this.props}
                query={this.state.query}
                after={this.state.after}
                before={this.state.before}
                limit={this.state.limit}
              />
            </div>
            {!this.state.loadingRepos && (
              <Paginator
                direction="right"
                clickHandler={this.clickHandler}
                disabled={this.state.hasNext}
              />
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

AppBody.propTypes = {
  filterTerm: PropTypes.string,
  anchorTerm: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

AppBody.defaultProps = {
  anchorTerm: '',
  filterTerm: '',
};

export default AppBody;

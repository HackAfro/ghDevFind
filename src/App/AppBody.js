import React from 'react';
import SearchField from '../SearchBar/SearchField';

import SideBar from '../Sidebar/SideBar';
import RepoList from '../RepoList/UserList';
import Paginator from '../Paginator/Paginator';

import { AppContext } from '../Provider/Provider';

const AppBody = () => (
  <AppContext.Consumer>
    {({ state, callbacks }) => (
      <React.Fragment>
        <div style={{ textAlign: 'center' }}>
          <SearchField />
        </div>
        <section className="app-body">
          <SideBar />
          <div className="result-section">
            {!state.loadingRepos && <Paginator direction="left" />}
            <div className="user-list">
              <RepoList
                filterTerm={state.filterTerm}
                query={state.query}
                after={state.after}
                before={state.before}
                limit={state.limit}
                pagCallback={callbacks.setPagInfo}
              />
            </div>
            {!state.loadingRepos && <Paginator direction="right" />}
          </div>
        </section>
      </React.Fragment>
      )}
  </AppContext.Consumer>
);

export default AppBody;

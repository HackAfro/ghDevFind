import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import AppBar from '../App/AppBar';
import AppBody from '../App/AppBody';

import UserDetails from '../UserDetails/UserDetails';

const Main = ({ match }) => (
  <div className="App">
    <main className="main-content">
      <AppBar />
      <Route path={match.url} exact component={AppBody} />
      <Route path="/user/:id/" component={UserDetails} />
    </main>
  </div>
);

Main.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;

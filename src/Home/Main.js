import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import AppBar from '../App/AppBar';
import AppBody from '../App/AppBody';

import UserDetails from '../UserDetails/UserDetails';

const Main = () => (
  <div className="App">
    <main className="main-content">
      <AppBar />
      <Route path="/" exact component={AppBody} />
      <Route path="/user/:id/" exact component={UserDetails} />
    </main>
  </div>
);

export default Main;

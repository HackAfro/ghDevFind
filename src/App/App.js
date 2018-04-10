import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Provider from '../Provider/Provider';
import './App.css';
import UserDetails from '../UserDetails/UserDetails';
import AppBody from './AppBody';
import AppBar from './AppBar';

const App = () => (
  <Provider>
    <Router>
      <div className="App">
        <main className="main-content">
          <AppBar />
          <Route path="/" exact render={() => <AppBody />} />
          <Route path="/user/:id/" exact component={UserDetails} />
        </main>
      </div>
    </Router>
  </Provider>
);

export default App;

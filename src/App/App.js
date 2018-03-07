import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../Home/Main';
import store, { history } from '../store';

import './App.css';

const App = () => (
  <Router>
    <Route path="/" component={Main} />
  </Router>
);

export default App;

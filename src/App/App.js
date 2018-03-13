import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Provider from '../Provider/Provider';
import Main from '../Home/Main';
import './App.css';

const App = () => (
  <Router>
    <Provider>
      <div>
        <Route path="/" component={Main} />
      </div>
    </Provider>
  </Router>
);

export default App;

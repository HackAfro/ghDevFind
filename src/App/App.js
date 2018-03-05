import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../Home/Main';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Main} />
    </div>
  </Router>
);

export default App;

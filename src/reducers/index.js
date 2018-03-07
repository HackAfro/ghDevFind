import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  console.log(action, state);
  return state;
};

const rootReducer = combineReducers({ reducer, routing: routerReducer });

export default rootReducer;

// src/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import anotherReducer from './anotherReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  user: userReducer,
  another: anotherReducer,
  counter: counterReducer,
  // reset: resetCounter
});

export default rootReducer;

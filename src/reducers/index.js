// src/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import anotherReducer from './anotherReducer';
import counterReducer from './counterReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  user: userReducer,
  another: anotherReducer,
  counter: counterReducer,
  auth: authReducer,
});

export default rootReducer;

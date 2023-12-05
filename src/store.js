// src/store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
// другие настройки хранилища



// import { configureStore } from '@reduxjs/toolkit';
// import { counterReducer } from './reducers/counterReducer';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export default store;
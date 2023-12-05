// src/store.js
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

// Настройка Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    /* preloadedState, */
    composeEnhancers(
        applyMiddleware(/* здесь могут быть ваши middleware, например, thunk */)
    )
);
// другие настройки хранилища



// import { configureStore } from '@reduxjs/toolkit';
// import { counterReducer } from './reducers/counterReducer';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export default store;
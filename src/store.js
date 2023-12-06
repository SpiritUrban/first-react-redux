import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import {thunk} from 'redux-thunk';

// Настройка Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
    rootReducer,
    /* preloadedState, */
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

// import { configureStore } from '@reduxjs/toolkit';
// import { counterReducer } from './reducers/counterReducer';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export default store;
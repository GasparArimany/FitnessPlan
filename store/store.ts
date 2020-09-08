import {applyMiddleware, createStore} from 'redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// import {composeWithDevTools} from 'redux-devtools-extension';
import createReduxSaga from 'redux-saga';

// import monitorReducersEnhancer from './enhancers/monitorReducers';
// import loggerMiddleware from './middleware/logger';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import devToolsEnhancer from 'remote-redux-devtools';

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, ...getDefaultMiddleware()],
});

export default store;

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../reducers/index';
export function configureStore() {
  const store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}

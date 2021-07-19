import { applyMiddleware, combineReducers, createStore } from 'redux';
import { application, messages, contacts } from "./ducks";
import { createLogger } from 'redux-logger/src';
import thunk from 'redux-thunk';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ application, messages, contacts }),
  applyMiddleware(logger, thunk),
);

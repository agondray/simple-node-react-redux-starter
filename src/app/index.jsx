import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes.jsx';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Grid } from 'react-flexbox-grid/lib/index';


let logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(promiseMiddleware(), logger, thunk)
));

window.store = store;

const styles = {
  grid: {
    width: '100%',
    height: '100vh',
  }
}

render (<Grid style={ styles.grid }><Provider store={store}><Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>{Routes}</Router></Provider></Grid>,document.getElementById('app'));

// render(<Router>{Routes}</Router>,document.getElementById('app'));

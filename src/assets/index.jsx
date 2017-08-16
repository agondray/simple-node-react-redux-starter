import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { Grid } from 'react-flexbox-grid/lib/index';

import Routes from './routes.jsx';
import rootReducer from './reducers';
import styles from './stylesheets/rootGrid.css'

let logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let storeWithMiddleware = createStore(rootReducer, {/* optional preloaded state */}, composeEnhancers(
  applyMiddleware(promiseMiddleware(), logger, ReduxThunk)
));

window.store = storeWithMiddleware;

render (
  <Grid className={styles.rootGrid}>
    <Provider store={storeWithMiddleware}>
      <Router history={browserHistory}>{Routes}</Router>
    </Provider>
  </Grid>,document.getElementById('app')
);

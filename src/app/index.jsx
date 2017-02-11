import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes.jsx';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';


let logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(promiseMiddleware(), logger, thunk)
));

window.store = store;

render (<Provider store={store}><Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>{Routes}</Router></Provider>,document.getElementById('app'));

// render(<Router>{Routes}</Router>,document.getElementById('app'));

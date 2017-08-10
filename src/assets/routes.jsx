import { Route, IndexRoute, browserHistory} from 'react-router';
// containers
import App from './containers/App/';
import Landing from './containers/Landing/';

// components

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Landing } />
  </Route>
);

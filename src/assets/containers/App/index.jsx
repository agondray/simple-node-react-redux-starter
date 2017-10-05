import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Helmet } from 'react-helmet';
import injectTapEventPlugin from 'react-tap-event-plugin';

import TopNav from '../TopNav';
import Footer from '../../components/Footer';

const faviconPath = require('../../images/favicon-32x32.png');

// Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Helmet>
            <link rel="icon" href={faviconPath} type="image/x-icon" />
          </Helmet>

          <TopNav />
          {React.Children.map(this.props.children, child => React.cloneElement(child))}
          <Footer />

        </div>
      </MuiThemeProvider>
    );
  }
}

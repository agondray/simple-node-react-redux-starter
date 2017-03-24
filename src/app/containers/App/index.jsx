import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Row, Col } from 'react-flexbox-grid/lib/index';
import TopNav from '../TopNav';
import Footer from '../../components/Footer';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // states here
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{ backgroundImage: 'url(\'http://imageshack.com/a/img923/4467/GEWqeQ.jpg\')', padding: '0px' }}>
          <Row>
            <Col xs={ 12 } style={{ padding: '0px', }}>
              <TopNav />
            </Col>
          </Row>
          <Row style={{ height: '1000px' }}>
            <Col xs={ 12 } style={{ padding: '0px' }}>
              { React.Children.map(this.props.children, child => React.cloneElement(child)) }
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 } style={{ padding: '0px', }}>
              <Footer />
            </Col>
          </Row>
      </div>
    </MuiThemeProvider>
    )
  }
}

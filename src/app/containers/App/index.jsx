import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Row, Col } from 'react-flexbox-grid/lib/index';
import TopNav from '../TopNav';
import Footer from '../../components/Footer';

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
        <div>
          <Row>
            <Col xs={ 12 }>
              <TopNav />
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              { React.Children.map(this.props.children, child => React.cloneElement(child)) }
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              <Footer />
            </Col>
          </Row>
      </div>
    </MuiThemeProvider>
    )
  }
}

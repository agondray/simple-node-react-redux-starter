import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/TextField';

import styles from './landing.css';

const muiStyles = {
  textfield: {
    width: '100%',
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // states here
    }
  }

  render() {
    return (
      <div className={ styles.landingDefault }>
        <Row>
          <Col xsOffset={ 3 } xs={ 6 }>
            <h1>Welcome To JV's React-Redux Boilerplate</h1>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={ 2 } xs={ 4 }>
            <TextField style={ muiStyles.textfield } hintText="Hint Text"
              floatingLabelText="Floating Label Text" />
          </Col>
          <Col xs={ 4 }>
            <TextField style={ muiStyles.textfield } hintText="Hint Text"
              floatingLabelText="Floating Label Text" />
          </Col>
        </Row>
      </div>
    )
  }
}

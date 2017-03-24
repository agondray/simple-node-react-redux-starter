import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './landing.css';

const muiStyles = {
  textfield: {
    // width: '100%',
    color: '#FFFFFF'
  },
  floatingLabel: { color: '#FFFFFF' },
  floatingHint: { color: '#FFFFFF' }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      credentialsError: '',
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePressEnter = this.handlePressEnter.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    console.log(`submitting ${this.state.username} and ${this.state.password} to redux state...`);
  }

  handlePressEnter(e) {
    // e.preventDefault();
    if (e.which === 13) {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div className={ styles.landingDefault }>
        <Row style={{ padding: '0px', }}>
          <Col xsOffset={ 3 } xs={ 6 }>
            <h1 style={{ textAlign: 'center', }}>Welcome To JV's React-Redux Boilerplate!</h1>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={ 3 } xs={ 2 }>
            <TextField
              hintText=''
              floatingLabelText='Enter Username'
              floatingLabelStyle={muiStyles.floatingLabel}
              hintStyle={muiStyles.floatingHint}
              inputStyle={muiStyles.textfield}
              onChange={this.handleUsernameChange}
              onKeyDown={this.handlePressEnter}
              value={this.state.username} />
          </Col>
          <Col xsOffset={ 2 } xs={ 2 }>
            <TextField
              type='password'
              style={ muiStyles.textfield }
              hintText=''
              floatingLabelText='Enter Password'
              floatingLabelStyle={muiStyles.floatingLabel}
              hintStyle={muiStyles.floatingHint}
              inputStyle={muiStyles.textfield}
              onChange={this.handlePasswordChange}
              onKeyDown={this.handlePressEnter}
              value={this.state.password} />
          </Col>
        </Row>
        <Row style={{ paddingTop: '1rem' }}>
          <Col xsOffset={5} xs={2}>
            <RaisedButton
              label='Login'
              primary={true}
              fullWidth={true}
              onTouchTap={this.handleSubmit} />
          </Col>
        </Row>
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import styles from '../../stylesheets/landing.css';
import landingApi from '../../api/Landing';
import { updateTestAsync } from '../../actions/main';

const muiStyles = {
  textfield: {
    color: '#FFFFFF',
  },
  floatingLabel: { color: '#FFFFFF' },
  floatingHint: { color: '#FFFFFF' },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      credentialsError: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePressEnter = this.handlePressEnter.bind(this);
    this.updateTestState = this.updateTestState.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit() {
    console.log(`submitting ${this.state.username} and ${this.state.password} to redux state!`);
    landingApi.createTestUser({
      name: this.state.username,
      countersign: this.state.password,
    }).then((res) => {
      console.log('create user response: ', res.data);
    })
  }

  handlePressEnter(e) {
    if (e.which === 13) {
      this.handleSubmit();
    }
  }

  updateTestState() {
    this.props.updateTestAsync();
  }

  render() {
    return (
      <div className={styles.landingDefault}>
        <Row style={{ padding: '0px' }}>
          <Col xsOffset={3} xs={6}>
            <h1 style={{ textAlign: 'center' }}>Boilerplate Landing Page</h1>
            <h2 style={{ textAlign: 'center' }}>Foo Bar Baz!</h2>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={3} xs={2}>
            <TextField
              hintText=""
              floatingLabelText="Enter Username"
              floatingLabelStyle={muiStyles.floatingLabel}
              hintStyle={muiStyles.floatingHint}
              inputStyle={muiStyles.textfield}
              onChange={this.handleUsernameChange}
              value={this.state.username}
            />
          </Col>
          <Col xsOffset={2} xs={2}>
            <TextField
              type="password"
              style={muiStyles.textfield}
              hintText=""
              floatingLabelText="Enter Password"
              floatingLabelStyle={muiStyles.floatingLabel}
              hintStyle={muiStyles.floatingHint}
              inputStyle={muiStyles.textfield}
              onChange={this.handlePasswordChange}
              onKeyDown={this.handlePressEnter}
              value={this.state.password}
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: '1rem' }}>
          <Col xsOffset={5} xs={2}>
            <RaisedButton
              label="L/R"
              primary
              fullWidth
              onTouchTap={this.handleSubmit}
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: '1rem' }}>
          <Col xsOffset={5} xs={2}>
            <RaisedButton
              label='ClickMe'
              primary={true}
              fullWidth={true}
              onTouchTap={this.updateTestState} />
          </Col>
        </Row>
      </div>
    );
  }
}

App.propTypes = {
  test: PropTypes.string,
  fun: PropTypes.string,
  updateTestAsync: PropTypes.func,
}

const state = (state) => ({
  test: state.main.test,
  fun: state.main.fun,
});

const dispatch = dispatch => ({
  updateTestAsync: () => dispatch(updateTestAsync()),
})

export default connect(state, dispatch)(App);

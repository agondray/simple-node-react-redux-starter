import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import landingApi from '../../apis/Landing';
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
      <div className="landing__container">
        <div className="heading__wrapper">
          <h1 >Boilerplate Landing Page</h1>
          <h2>Foo Bar Baz!</h2>
        </div>
        <div className="form__wrapper">
          <TextField
            className="form__input"
            hintText=""
            floatingLabelText="Enter Username"
            floatingLabelStyle={muiStyles.floatingLabel}
            hintStyle={muiStyles.floatingHint}
            inputStyle={muiStyles.textfield}
            onChange={this.handleUsernameChange}
            value={this.state.username}
          />
          <TextField
            className="form__input"
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
        </div>
        <RaisedButton
          className="submit--button"
          label="L/R"
          primary
          onTouchTap={this.handleSubmit}
        />
        <RaisedButton
          className="submit--button"
          label="ClickMe"
          primary
          onTouchTap={this.updateTestState}
        />
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

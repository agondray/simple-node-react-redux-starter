import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  absolute: {
    position: 'absolute'
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
      <div>
        <AppBar title="TopNav"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<FlatButton label="Login" />} />
      </div>
    )
  }
}

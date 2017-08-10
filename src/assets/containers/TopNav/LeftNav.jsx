import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { compose, setDisplayName, componentFromProp, lifecycle, withProps } from 'recompose'

const enhance = compose(
  setDisplayName('LeftNav'),
  lifecycle({
    componentWillMount() {
      console.log('leftnav -- willmount!');
    }
  })
);

const LeftNav = (props) => (
  <div>
    <AppBar title="LeftNav"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      iconElementRight={<FlatButton label="Clicky clicky!" />} />
  </div>
)

export default enhance(LeftNav);

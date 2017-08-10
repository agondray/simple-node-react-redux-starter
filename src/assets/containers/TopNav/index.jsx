import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import { compose, withState, withHandlers, setDisplayName, componentFromProp, lifecycle, withProps } from 'recompose'

import LeftNav from './LeftNav';

const enhance = compose (
  setDisplayName('TopNav'),
  withState(
    'clicked',
    'triggerClick',
    false,
  ),
  withHandlers({
    updateClick: ({ triggerClick }) => () => triggerClick(bool => !bool),
    reset: ({ triggerClick }) => () => triggerClick(bool => false)
  }),
  lifecycle({
    componentWillMount() {
      console.log('topnav index - willmount - this is a test');
      console.log('props: ', this.props);
    },
    componentDidMount() {
      console.log('didmount - topnav index');
    }
  })
)

const TopNav = (props) => {
  return (
    <div>
      <LeftNav />
    </div>
  )
}

export default enhance(TopNav);

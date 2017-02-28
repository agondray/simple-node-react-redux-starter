import React, { Component, PropTypes } from 'react';

import styles from './footer.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // states here
    }
  }

  render() {
    return (
      <div className={ styles.footer }>
        <h2 className={ styles.sampleText }>Cest Magnifique</h2>
      </div>
    )
  }
}

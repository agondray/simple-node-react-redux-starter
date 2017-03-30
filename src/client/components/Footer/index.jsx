import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid/lib/index';

import styles from './footer.css';

const tempStyles = {
  a: {
    color: '#D5D5D6',
  },
  li: {
    listStyleType: 'none',
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
      <div className={ styles.footer }>
        <Row>
          <Col xsOffset={1} xs={3}>
            <h2 className={ styles.footerHeading }>Sample Footer Heading 1</h2>
            <ul>
              <li className={ styles.footerList }><a className={ styles.footerLinks } href="#">Sample Link</a></li>
              <li className={ styles.footerList }><a className={ styles.footerLinks } href="#">Sample Link</a></li>
              <li className={ styles.footerList }><a className={ styles.footerLinks } href="#">Sample Link</a></li>
            </ul>
          </Col>
          <Col xsOffset={1} xs={4}>
            <h2 className={ styles.footerHeading }>Sample Footer Heading 2</h2>
            <ul className={ styles.footerList }>
              <li className={ styles.footerList }><a className={ styles.footerLinks } href="#">Sample Link</a></li>
              <li className={ styles.footerList }><a className={ styles.footerLinks } href="#">Sample Link</a></li>
              <li className={ styles.footerList }><a className={ styles.footerLinks } href="#">Sample Link</a></li>
            </ul>
          </Col>
          <Col xs={3}>
            <h2 className={ styles.footerHeading }>Sample Footer Heading 2</h2>
            <ul className={ styles.footerList }>
              <li className={ styles.footerList }><a className={ styles.footerLinks } href="#">Sample Link</a></li>
              <li className={ styles.footerList }><a className={ styles.footerLinks } href="#">Sample Link</a></li>
              <li className={ styles.footerList }><a className={ styles.footerLinks } href="#">Sample Link</a></li>
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}

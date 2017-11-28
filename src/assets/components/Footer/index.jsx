import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.renderFooterColumns = this.renderFooterColumns.bind(this);
  }

  renderFooterColumns() {
    const pseudoProps = ['Link to site A', 'Link to site B', 'Link to site B'];

    this.partial = pseudoProps.map((prop, index) => (
      <div key={prop}>
        <h2 className="footer-heading">Sample Footer Heading {index + 1}</h2>
        <ul className="footer-list">
          <li><a className="footer-links" href="#">{prop}</a></li>
          <li><a className="footer-links" href="#">{prop}</a></li>
          <li><a className="footer-links" href="#">{prop}</a></li>
        </ul>
      </div>
    ));

    return this.partial;
  }

  render() {
    return (
      <div className="footer">
        {this.renderFooterColumns()}
      </div>
    );
  }
}

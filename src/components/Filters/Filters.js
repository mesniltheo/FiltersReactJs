import React, { Component, PropTypes } from 'react';
import styles from './Filters.scss';

export default class Filters extends Component {

  constructor(props) {
    super(props);
  }

  testFunction(e) {
    this.props.handleChange(e.target.value);
  }

  render() {
    return (
      <div className={styles.filters}>
        Filters
        <div>
          <input type="text" placeholder="toto" onChange={this.testFunction.bind(this)} />
        </div>
        <section>
          <h4>gender</h4>
          <ul>
            <li>women</li>
            <li>men</li>
          </ul>
        </section>
        <section>
          <h4>category</h4>
          <ul>
            <li>new</li>
            <li>t-shirts</li>
            <li>shorts</li>
            <li>hoodies</li>
            <li>totebags</li>
          </ul>
        </section>
        <section>
          <h4>color</h4>
          <ul>
            <li>white</li>
            <li>gray</li>
            <li>blue</li>
            <li>green</li>
            <li>pink</li>
            <li>red</li>
          </ul>
        </section>
        <section>
          <h4>theme</h4>
          <ul>
            <li>just do nothing</li>
            <li>gone</li>
            <li>dynamic duo</li>
          </ul>
        </section>
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import styles from './Filters.scss';

export default class Filters extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   gender: '',
    //   category: '',
    //   color: '',
    //   theme: '',
    // };
  }

  getFilter(category, name) {
    // console.log(category, name);
    this.setState({ [category]: name });
    this.props.handleChange(this.state);
  }

  resetFilters() {
    this.setState({
      gender: '',
      category: '',
      color: '',
      theme: '',
    });
  }

  render() {
    return (
      <div className={styles.filters}>
        Filters
        <section>
          <h4>gender</h4>
          <ul>
            <li
              // className={this.state.gender === 0 ? styles.filters__active : ''}
              onClick={() => this.getFilter('gender', 0)}
            >women</li>
            <li
              // className={this.state.gender === 1 ? styles.filters__active : ''}
              onClick={() => this.getFilter('gender', 1)}
            >men</li>
          </ul>
        </section>
        <section>
          <h4>category</h4>
          <ul>
            <li
              // className={this.state.category === 0 ? styles.filters__active : ''}
              onClick={() => this.getFilter('category', 0)}
            >new</li>
            <li
              // className={this.state.category === 1 ? styles.filters__active : ''}
              onClick={() => this.getFilter('category', 1)}
            >t-shirts</li>
            <li
              // className={this.state.category === 2 ? styles.filters__active : ''}
              onClick={() => this.getFilter('category', 2)}
            >shorts</li>
            <li
              // className={this.state.category === 3 ? styles.filters__active : ''}
              onClick={() => this.getFilter('category', 3)}
            >hoodies</li>
            <li
              // className={this.state.category === 4 ? styles.filters__active : ''}
              onClick={() => this.getFilter('category', 4)}
            >totebags</li>
          </ul>
        </section>
        <section>
          <h4>color</h4>
          <ul>
            <li
              // className={this.state.color === 'white' ? styles.filters__active : ''}
              onClick={() => this.getFilter('color', 'white')}
            >white</li>
            <li
              // className={this.state.color === 'gray' ? styles.filters__active : ''}
              onClick={() => this.getFilter('color', 'gray')}
            >gray</li>
            <li
              // className={this.state.color === 'blue' ? styles.filters__active : ''}
              onClick={() => this.getFilter('color', 'blue')}
            >blue</li>
            <li
              // className={this.state.color === 'green' ? styles.filters__active : ''}
              onClick={() => this.getFilter('color', 'green')}
            >green</li>
            <li
              // className={this.state.color === 'pink' ? styles.filters__active : ''}
              onClick={() => this.getFilter('color', 'pink')}
            >pink</li>
            <li
              // className={this.state.color === 'red' ? styles.filters__active : ''}
              onClick={() => this.getFilter('color', 'red')}
            >red</li>
          </ul>
        </section>
        <section>
          <h4>theme</h4>
          <ul>
            <li
              // className={this.state.theme === 0 ? styles.filters__active : ''}
              onClick={() => this.getFilter('theme', 0)}
            >just do nothing</li>
            <li
              // className={this.state.theme === 1 ? styles.filters__active : ''}
              onClick={() => this.getFilter('theme', 1)}
            >gone</li>
            <li
              // className={this.state.theme === 2 ? styles.filters__active : ''}
              onClick={() => this.getFilter('theme', 2)}
            >dynamic duo</li>
          </ul>
        </section>
        <div onClick={() => this.resetFilters()}>reset all filters</div>
      </div>
    );
  }
}

Filters.propTypes = {
  handleChange: PropTypes.func,
};

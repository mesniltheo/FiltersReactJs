import React, { Component, PropTypes } from 'react';
import styles from './Filters.scss';
import { Color } from '../Colors/Color';
import filterSvg from '../../../public/images/filters.svg';
import closeSvg from '../../../public/images/close.svg';

export default class Filters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filters: false,
    };
  }

  getFilter(category, name) {
    // console.log(category, name);
    this.setState({ [category]: name });
    this.props.handleChange(this.state);
    this.closeFilters();
  }

  openFilters() {
    this.setState({ filters: true });
  }

  closeFilters() {
    this.setState({ filters: false });
  }

  resetFilters() {
    this.setState({
      gender: '',
      category: '',
      color: '',
      theme: '',
    });
    this.closeFilters();
  }

  render() {
    return (
      <div className={this.state.filters ? styles.filters__active : styles.filters}>
        <div className={styles.filters__selector}>
          <img src={filterSvg} alt="open-filters" onClick={() => this.openFilters()} />
        </div>
        <div className={styles.filters__content}>
          <img src={closeSvg} alt="close-filters" onClick={() => this.closeFilters()} />
          <h2>Filters</h2>
          <section className={styles.filters__inline}>
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
          <section className={styles.filters__inline}>
            <h4>color</h4>
            <ul className={styles.filters__color}>
              <li
                // className={this.state.color === 'white' ? styles.filters__active : ''}
                onClick={() => this.getFilter('color', 'white')}
              ><Color color="white" /></li>
              <li
                // className={this.state.color === 'gray' ? styles.filters__active : ''}
                onClick={() => this.getFilter('color', 'gray')}
              ><Color color="gray" /></li>
              <li
                // className={this.state.color === 'blue' ? styles.filters__active : ''}
                onClick={() => this.getFilter('color', 'blue')}
              ><Color color="blue" /></li>
              <li
                // className={this.state.color === 'green' ? styles.filters__active : ''}
                onClick={() => this.getFilter('color', 'green')}
              ><Color color="green" /></li>
              <li
                // className={this.state.color === 'pink' ? styles.filters__active : ''}
                onClick={() => this.getFilter('color', 'pink')}
              ><Color color="pink" /></li>
              <li
                // className={this.state.color === 'red' ? styles.filters__active : ''}
                onClick={() => this.getFilter('color', 'red')}
              ><Color color="red" /></li>
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
          <div
            className={styles.filters__reset}
            onClick={() => this.resetFilters()}
          >Reset all filters</div>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  handleChange: PropTypes.func,
};

import React, { Component, PropTypes } from 'react';
import styles from './Filters.scss';
import { Color } from '../Color/Color';
import filterSvg from '../../../public/images/filters.svg';
import closeSvg from '../../../public/images/close.svg';
import arrowDown from '../../../public/images/arrow-down.svg';
import arrowUp from '../../../public/images/arrow-up.svg';

export default class Filters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filters: false,
      openCategory: false,
      openTheme: true,
    };
  }

  getFilter(obj) {
    this.props.handleChange(obj);
  }

  openFilters() {
    this.setState({ filters: true });
  }

  closeFilters() {
    this.setState({ filters: false });
  }

  resetFilters() {
    this.props.reset();
    this.closeFilters();
  }

  render() {
    return (
      <div className={this.state.filters ? styles.filters__active : styles.filters}>
        <div className={styles.filters__selector}>
          <img src={filterSvg} alt="open-filters" onClick={() => this.openFilters()} />
        </div>
        <div className={styles.filters__content}>
          <img
            className={styles.filters__contentImg}
            src={closeSvg} alt="close-filters"
            onClick={() => this.closeFilters()}
          />
          <h2>Filters</h2>
          <section className={styles.filters__inline}>
            <h4>gender</h4>
            <ul>
              <li
                className={this.props.filters.gender === 1 ? styles.filters__active : ''}
                onClick={() => this.getFilter({ gender: 1 })}
              >women</li>
              <li
                className={this.props.filters.gender === 2 ? styles.filters__active : ''}
                onClick={() => this.getFilter({ gender: 2 })}
              >men</li>
            </ul>
          </section>
          <section
            className={this.state.openCategory === true ?
              styles.filters__section : styles.filters__sectionActive
            }
          >
            <h4>category</h4>
            <div
              className={styles.filters__toggleSection}
              onClick={() => this.setState({
                openCategory: this.state.openCategory === false,
              })}
            >
              <img src={this.state.openCategory === false ? arrowUp : arrowDown} alt="open" />
            </div>
            <ul>
              <li
                className={this.props.filters.category === 1 ? styles.filters__active : ''}
                onClick={() => this.getFilter({ category: 1 })}
              >new</li>
              <li
                className={this.props.filters.category === 2 ? styles.filters__active : ''}
                onClick={() => this.getFilter({ category: 2 })}
              >t-shirts</li>
              <li
                className={this.props.filters.category === 3 ? styles.filters__active : ''}
                onClick={() => this.getFilter({ category: 3 })}
              >shorts</li>
              <li
                className={this.props.filters.category === 4 ? styles.filters__active : ''}
                onClick={() => this.getFilter({ category: 4 })}
              >hoodies</li>
              <li
                className={this.props.filters.category === 5 ? styles.filters__active : ''}
                onClick={() => this.getFilter({ category: 5 })}
              >totebags</li>
            </ul>
          </section>
          <section className={styles.filters__inline}>
            <h4>color</h4>
            <ul className={styles.filters__color}>
              <li
                className={this.props.filters.color === 'white' ? styles.filters__active : ''}
                onClick={() => this.getFilter({ color: 'white' })}
              ><Color color="white" /></li>
              <li
                className={this.props.filters.color === 'gray' ? styles.filters__active : ''}
                onClick={() => this.getFilter({ color: 'gray' })}
              ><Color color="gray" /></li>
              <li
                className={this.props.filters.color === 'blue' ? styles.filters__active : ''}
                onClick={() => this.getFilter({ color: 'blue' })}
              ><Color color="blue" /></li>
              <li
                className={this.props.filters.color === 'green' ? styles.filters__active : ''}
                onClick={() => this.getFilter({ color: 'green' })}
              ><Color color="green" /></li>
              <li
                className={this.props.filters.color === 'pink' ? styles.filters__active : ''}
                onClick={() => this.getFilter({ color: 'pink' })}
              ><Color color="pink" /></li>
              <li
                className={this.props.filters.color === 'red' ? styles.filters__active : ''}
                onClick={() => this.getFilter({ color: 'red' })}
              ><Color color="red" /></li>
            </ul>
          </section>
          <section
            className={this.state.openTheme === true ?
              styles.filters__section : styles.filters__sectionActive
            }
          >
            <h4>theme</h4>
            <div
              className={styles.filters__toggleSection}
              onClick={() => this.setState({
                openTheme: this.state.openTheme === false,
              })}
            >
              <img src={this.state.openTheme === false ? arrowUp : arrowDown} alt="open" />
            </div>
            <ul>
              <li
                className={this.props.filters.theme === 1 ? styles.filters__active : ''}
                onClick={() => this.getFilter({ theme: 1 })}
              >just do nothing</li>
              <li
                className={this.props.filters.theme === 3 ? styles.filters__active : ''}
                onClick={() => this.getFilter({ theme: 2 })}
              >gone</li>
              <li
                className={this.props.filters.theme === 3 ? styles.filters__active : ''}
                onClick={() => this.getFilter({ theme: 3 })}
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
  reset: PropTypes.func,
  filters: PropTypes.object,
};

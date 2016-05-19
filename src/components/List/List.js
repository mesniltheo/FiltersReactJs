import React, { Component, PropTypes } from 'react';
import styles from './List.scss';
import { Item } from '../../components/Item/Item';

export default class List extends Component {

  renderItems() {
    const { content } = this.props;
    if (content !== []) {
      return (
        <div className={styles.list}>
          {content.map((item, index) => (
            <Item content={item} key={index} />
          ))}
        </div>
      );
    }
    return (
      <div className={styles.list}>
        Aucun resultat
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

List.propTypes = {
  content: PropTypes.array,
};

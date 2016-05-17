import React, { PropTypes } from 'react';
import styles from './Item.scss';

export const Item = props => (
  <div className={styles.item}>
    {props.content}
  </div>
);

Item.propTypes = {
  content: PropTypes.array,
};

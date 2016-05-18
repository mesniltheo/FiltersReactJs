import React, { PropTypes } from 'react';
import styles from './Color.scss';
import classNames from 'classnames';

export const Color = props => {
  let color = classNames(styles.color, styles[`color__${props.color}`])
  return (
    <div className={color}>
    </div>
  );
};

Color.propTypes = {
  color: PropTypes.string,
};

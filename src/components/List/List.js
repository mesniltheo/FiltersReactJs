import React, { PropTypes } from 'react';
import styles from './List.scss';
import { Item } from '../../components/Item/Item';

export const List = props => {
  if (props.content.length) {
    return (
      <div className={styles.list}>
        {props.content.map((item, index) => (
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
};

List.propTypes = {
  content: PropTypes.array,
};

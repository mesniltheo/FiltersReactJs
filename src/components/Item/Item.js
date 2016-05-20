import React, { PropTypes } from 'react';
import { Color } from '../Color/Color';
import styles from './Item.scss';

import img from '../../../public/images/clothing.jpg';
let imgBg;

export const Item = props => {
  imgBg = { backgroundImage: `url(${img})` };
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <div className={styles.item__imageBg} style={imgBg}>
        </div>
      </div>
      <div className={styles.item__content}>
        <div className={styles.item__name}>
          {props.content.name}
        </div>
        <div className={styles.item__price}>
          £{props.content.price}
        </div>
        <div className={styles.item__color}>
          <Color color={props.content.color} />
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  content: PropTypes.object,
};

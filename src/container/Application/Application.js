import React, { PropTypes } from 'react';
import './base__css/__base.scss';

export const Application = props => (
  <div className="wrapper">
    {props.children}
  </div>
);

Application.propTypes = {
  children: PropTypes.node.isRequired,
};

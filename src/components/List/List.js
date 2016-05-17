import React, { Component, PropTypes } from 'react';
import addons from 'react-addons-create-fragment';
import styles from './List.scss';
import { Item } from '../../components/Item/Item';

export default class List extends Component {

  renderItems() {
    const { content } = this.props;
    return (
      <div>
        {content.map((item, index) => {
          return (
            <Item content={addons(item)} key={index} />
          );
        })}
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

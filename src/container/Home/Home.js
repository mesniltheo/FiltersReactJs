import React, { Component, PropTypes } from 'react';
import List from '../../components/List/List';
import Filters from '../../components/Filters/Filters';
import clothes from '../../../public/data/clothes';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  filters(val) {
    console.log(val);
  }

  render() {
    return (
      <div>
        <Filters handleChange={this.filters} />
        <List content={clothes} />
      </div>
    );
  }
}

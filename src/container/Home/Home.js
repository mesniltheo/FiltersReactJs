import React, { Component } from 'react';
import _ from 'lodash';
import List from '../../components/List/List';
import Filters from '../../components/Filters/Filters';
import clothes from '../../../public/data/clothes';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    this.setState({ data: clothes });
  }

  filterDatas(val) {
    console.log(val);
    console.log(_.filter(clothes, val));
    this.setState({ data: _.filter(clothes, val) });
  }

  render() {
    return (
      <div>
        <Filters handleChange={this.filterDatas} />
        <List content={this.state.data} />
      </div>
    );
  }
}

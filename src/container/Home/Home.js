import React, { Component } from 'react';
import _ from 'lodash';
import List from '../../components/List/List';
import Filters from '../../components/Filters/Filters';
import clothes from '../../../public/data/clothes';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: clothes,
      filters: {},
      // filterOnGender: undefined,
      // filterOnCategory: undefined
    };
  }

  componentWillMount() {
    console.log(this);
    // this.setState({ data: clothes });
  }

  componentDidMount() {
    this.filterDatas(this.state.filters);
  }

  componentWillUpdate(nextProp, nextState) {
    console.log('componentWillUpdate', nextState.filters, this.state.filters);
    if (nextState.filters.gender !== this.state.filters.gender) {
      console.log('apply filter gender');
      this.filterDatas(nextState.filters);
    }

    if (nextState.filters.category !== this.state.filters.category) {
      console.log('apply filter category');
      this.filterDatas(nextState.filters);
    }
  }

  handleNewDatas(obj) {
    console.log('handle', obj);

    let _filters = {
      gender: this.state.filters.gender,
      category: this.state.filters.category,
    };

    if (obj.gender !== this.state.filters.gender) {
      _filters.gender = obj.gender;
      if (this.state.filters.category === undefined) {
        delete _filters.category;
      }
    }

    if (obj.category !== this.state.filters.category) {
      _filters.category = obj.category;
      if (this.state.filters.gender === undefined) {
        delete _filters.gender;
      }
    }

    console.log('setState', _filters);

    this.setState({
      filters: _filters,
    });

    // this.filterDatas(param);


    // console.log(obj.gender, obj.category);
    // let param = {};
    // if (this.state.filterOnGender === undefined) {
    //   this.state.filterOnGender = obj.gender;
    //   param.gender = obj.gender;
    // } else if (this.state.filterOnGender === obj.gender) {
    //   this.setState({filterOnGender: undefined});
    // } else if(obj.gender !== undefined){
    //   this.state.filterOnGender = obj.gender;
    //   param.gender = obj.gender;
    // }
    //
    // if (this.state.filterOnCategory === undefined) {
    //   // on applqique un filter
    //   this.state.filterOnCategory = obj.category;
    //   param.gender = obj.category;
    // } else if (this.state.filterOnCategory === obj.category) {
    //   this.setState({filterOnCategory: undefined});
    // } else if(obj.category !== undefined){
    //   this.state.filterOnCategory = obj.category;
    //   param.gender = obj.category;
    // }
    //
    // console.log('param', param);
    // this.filterDatas(param);
  }

  filterDatas(filters) {
    console.log('filterDatas', filters);

    // filters = _.pull(val, 'filters: true');
    // filters = _.pull(filters, 'filters: false');
    // console.log('filters', filters);
    // console.log('final', _.filter(clothes, filters));
    if (!filters.length) {
      this.setState({ data: _.filter(clothes, filters) });
    }
  }

  render() {
    return (
      <div>
        <Filters handleChange={this.handleNewDatas.bind(this)} />
        <List content={this.state.data} />
      </div>
    );
  }
}

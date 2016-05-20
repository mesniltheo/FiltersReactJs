import React, { Component } from 'react';
import _ from 'lodash';
import { List } from '../../components/List/List';
import Filters from '../../components/Filters/Filters';
import clothes from '../../../public/data/clothes';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: clothes,
      filters: {},
    };
  }

  componentWillMount() {
    this.filterDatas(this.state.filters);
  }

  handleNewDatas(obj) {
    const filtersDatas = {
      gender: this.state.filters.gender,
      category: this.state.filters.category,
      color: this.state.filters.color,
      theme: this.state.filters.theme,
    };

    if (obj.gender) {
      if (this.state.filters.gender === undefined) {
        filtersDatas.gender = obj.gender;
      } else {
        if (this.state.filters.gender === obj.gender) {
          delete filtersDatas.gender;
        } else {
          filtersDatas.gender = obj.gender;
        }
      }
    } else {
      if (this.state.filters.gender === undefined) {
        delete filtersDatas.gender;
      }
    }

    if (obj.category) {
      if (this.state.filters.category === undefined) {
        filtersDatas.category = obj.category;
      } else {
        if (this.state.filters.category === obj.category) {
          delete filtersDatas.category;
        } else {
          filtersDatas.category = obj.category;
        }
      }
    } else {
      if (this.state.filters.category === undefined) {
        delete filtersDatas.category;
      }
    }

    if (obj.color) {
      if (this.state.filters.color === undefined) {
        filtersDatas.color = obj.color;
      } else {
        if (this.state.filters.color === obj.color) {
          delete filtersDatas.color;
        } else {
          filtersDatas.color = obj.color;
        }
      }
    } else {
      if (this.state.filters.color === undefined) {
        delete filtersDatas.color;
      }
    }

    if (obj.theme) {
      if (this.state.filters.theme === undefined) {
        filtersDatas.theme = obj.theme;
      } else {
        if (this.state.filters.theme === obj.theme) {
          delete filtersDatas.theme;
        } else {
          filtersDatas.theme = obj.theme;
        }
      }
    } else {
      if (this.state.filters.theme === undefined) {
        delete filtersDatas.theme;
      }
    }

    this.setState({
      filters: filtersDatas,
    });

    this.filterDatas(filtersDatas);
  }

  reset() {
    this.state = {
      filters: {},
    };
    this.filterDatas({});
  }

  filterDatas(filters) {
    if (!filters.length) {
      this.setState({ data: _.filter(clothes, filters) });
    }
  }

  render() {
    return (
      <div>
        <Filters
          handleChange={this.handleNewDatas.bind(this)}
          reset={this.reset.bind(this)}
          filters={this.state.filters}
        />
        <List content={this.state.data} />
      </div>
    );
  }
}

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

  // On envoie les données la première fois
  componentWillMount() {
    this.filterDatas(this.state.filters);
  }

  // On récupère au clique (dans le composant Filters) les filtres
  handleNewDatas(obj) {
    // On initialise le filtersDatas
    const filtersDatas = {
      gender: this.state.filters.gender,
      category: this.state.filters.category,
      color: this.state.filters.color,
      theme: this.state.filters.theme,
    };

    // On regarde si l'object existe dans le paramètre
    if (obj.gender) {
      // S'il existe on regarde s'il le state est défini
      if (this.state.filters.gender === undefined) {
        // Alors on met les datas dans le filtersDatas
        filtersDatas.gender = obj.gender;
      } else {
        // S'il n'est pas défini on regarde s'il est égal au state
        if (this.state.filters.gender === obj.gender) {
          // Si oui on supprime l'object dans filtersDatas
          delete filtersDatas.gender;
        } else {
          // Si non on met les datas dans le filtersDatas
          filtersDatas.gender = obj.gender;
        }
      }
    } else {
      // Si l'object n'est pas défini on le supprime de filtersDatas
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

    // enfin on met à jour le state filters
    this.setState({
      filters: filtersDatas,
    });

    // et on appel la fonction permettant de filtrer les données
    this.filterDatas(filtersDatas);
  }

  reset() {
    this.state = {
      filters: {},
    };
    this.filterDatas({});
  }

  filterDatas(filters) {
    // si le filters n'est pas vide on utilise lodash on en met à jour le state data
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

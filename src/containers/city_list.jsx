/* eslint-disable object-shorthand */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import City from './city';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      this.props.cities.map((city) => {
        return <City key={city.name} city={city} />;
      })
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);

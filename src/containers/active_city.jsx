/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActive } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActive: setActive },
    dispatch
  );
}

class ActiveCity extends Component {
  render() {
    const image = `https://source.unsplash.com/random?${this.props.activeCity.slug}`;
    return (
      <div className="active-city">
        <h3>{ this.props.activeCity.name }</h3>
        <p>{ this.props.activeCity.address }</p>
        <img src={image} alt={this.props.activeCity.name} className="city-image" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);

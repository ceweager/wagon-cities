/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class ActiveCity extends Component {
  render() {
    return (
      <div className="active-city">
        <h3>{ this.props.activeCity.name }</h3>
        <p>{ this.props.activeCity.address }</p>
      </div>
    );
  }
}

export default ActiveCity;

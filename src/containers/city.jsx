/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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

class City extends Component {
  handleClick = () => {
    this.props.setActive(this.props.city);
  }

  render() {
    let classes = "list-group-item";
    if (this.props.city === this.props.activeCity) {
      classes += "selected";
    }
    return (
      <div onClick={this.handleClick} className={classes} >{this.props.city.name}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);

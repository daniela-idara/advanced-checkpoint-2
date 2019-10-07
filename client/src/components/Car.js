/* eslint-disable react/prop-types */
import React, { Component } from "react";

class Car extends Component {

  componentDidMount() {

         
    this.props.getCar(this.props.match.params.id);
  }
  render() {

    return (
      <div>
        <div><h2>{this.props.car.year} {this.props.car.make} {this.props.car.model}</h2></div>
        <div>Color: {this.props.car.color} </div>
        <div>{this.props.car.engine} Vehicle</div>
      </div>
    );
  }
}

export default Car;

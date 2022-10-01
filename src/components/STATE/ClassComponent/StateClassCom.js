import React, { Component } from 'react'

export default class StateClassCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          brand: "Ford",
          model: "Mustang",
          color: "red",
          year: 1964
        };
      }
  render() {
     const {brand,model,color,year} = this.state;
    return (
      <div>
        <h1>Brand: {brand}</h1>
        <h1>Model: {model}</h1>
        <h1>Color: {color}</h1>
        <h1>Year: {year}</h1>
      </div>
    )
  }
}

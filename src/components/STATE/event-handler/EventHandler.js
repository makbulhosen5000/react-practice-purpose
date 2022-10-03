import React, { Component } from 'react'

export default class EventHandler extends Component {
  constructor(props){
    super(props);
    this.state={
      ChangeValue:''
    };
  }
  onChangeHandler=(e)=>{
    this.setState({
      ChangeValue:e.target.value
    },()=>{console.log(e.target.value)})
  }
  render() {
    return (
      <div>
      <label>Name:</label>
          <input onChange={this.onChangeHandler} type="text" />
          <p>{this.state.ChangeValue}</p>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
      }
      
    increaseHandler=()=>{
          this.setState({
            count:this.state.count + 1
          })
      }
    decreaseHandler=()=>{ 
        this.setState({
            count:this.state.count - 1
          })
      }
  render() {
    const {count} = this.state;
    return (
      <div>
     
            <h1>Count : {count}</h1>
            <div>
                <button onClick={this.increaseHandler} disabled={count === 10 ? true:false}>Increase</button>
                <button onClick={this.decreaseHandler} disabled={count === 0 ? true:false}>Decrease</button>
            </div>

       
      </div>
    )
  }
}

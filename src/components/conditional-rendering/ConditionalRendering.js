import React, { Component } from 'react'
import Contact from './Contact'
import Home from './Home'

export default class ConditionalRendering extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : false
        }
    }
    
  render() {
    const {isLoggedIn} = this.state;
    // let element;
    // if(isLoggedIn){
    //     element = <Home/>
    // }else{
    //    element = <Contact/>
    // }
    return (
      <div>
          {/* {element} */}
         {isLoggedIn === true ? <Home/> : <Contact/>}
        {/* {this.state.isLoggedIn &&  <Home/>} */}
      </div>
    )
  }
}

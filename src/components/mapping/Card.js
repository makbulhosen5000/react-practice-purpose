import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Card.css';
import Todo from './Todo';
import Data from './Data.json';

function Card() {
    // const items = [];
    // for(let x = 0 ; x < Data.length; x++){
    //   items.push( <Todo title={Data[x].title} desc={Data[x].desc}   /> )
    // }
  return (
    <div className="container">
      
         {/* {items} */}

         {Data.map((item,index) => {
          const {title,desc} = item;
          return(
           
            <Todo key={index} title={title} desc={desc} />
          )
         })}
  </div>
  )
}

export default Card
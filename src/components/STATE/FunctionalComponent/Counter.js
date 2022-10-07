
import React, { useState } from 'react'

function Counter() {
   const [count,setCount]  = useState(0);

   const incrementHandler=()=>{
       setCount(count => count + 1 );
   }
   const decrementHandler=()=>{
       setCount(count => count - 1 )
   }
   const resetHandler=()=>{
     setCount(0)
   }
    
  return (
       
    <div>
        <h1>Count:{count}</h1>
        <button style={{ backgroundColor:'green' }} onClick={incrementHandler} disabled= {count === 10 ? true: false} >Increment</button>
        <button style={{ backgroundColor:'red' }} onClick={decrementHandler} disabled= {count === 0 ? true : false} >Decrement</button>
        <button style={{ backgroundColor:'yellow'}} onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default Counter
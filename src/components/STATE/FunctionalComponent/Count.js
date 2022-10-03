import React, { useState } from 'react'

export default function Count() {
    const [count,setCount] = useState(0);

    const incrementHandler=()=>{
        setCount(count=>count+1);
    }
    const decrementHandler=()=>{
        setCount(count=>count-1);
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={incrementHandler} disabled={count === 10 ? true:false}>Increment</button>
        <button onClick={decrementHandler} disabled={count === 0 ? true: false} >Decrement</button>
    </div>
  )
}

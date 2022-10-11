import React, { useState } from 'react'
import NewTodo from './NewTodo';
import Todos from './Todos';

const dummyTodos = ['todo1','todo2'];
function Home() {
     const [todos,setTodos] = useState(dummyTodos);

     const onSentToChild = (catchNewTodo) =>{
      setTodos([...todos,catchNewTodo]);
     }
  return (
    <div>
        <NewTodo onSentToChild={onSentToChild} />
        <Todos todos = {todos} />
    </div>
  )
}

export default Home
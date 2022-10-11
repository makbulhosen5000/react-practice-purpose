import React, { useState } from 'react'

function NewTodo(props) {
    const [todo,setTodo] = useState("");

    const addTodo=(e)=>{
      setTodo(e.target.value);
    }
    const fromHandler=(e)=>{
     e.preventDefault();
     props.onSentToChild(todo);
    }
  return (
    <div>
    <form onSubmit={fromHandler}>
        <label>New Todo</label>
        <input type="text" name="todo" id="todo" value={todo} onChange={addTodo} />
        <button>Add Todo</button>
    </form>
        
    </div>
  )
}

export default NewTodo
import React from 'react'

import './Card.css';

function Todo(props) {
   const {title,desc} = props;
  return (
    <div className="cards">
      <div className="card card-one">
        <h2 className="card-title">{title}</h2>
        <p className="description">{desc}</p>
      </div>
    </div>
  )
}

export default Todo
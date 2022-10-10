import React from 'react'


function Child(props) {
    const sentToParent = "I am from child"
    props.onSentToChild(sentToParent);
  return (
    <div>
       <h1> Sent Data Child To Parent Check Console </h1>
    </div>
  )
}

export default Child;
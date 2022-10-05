import React from 'react'

function CssDynamicStyle() {
    const error = true;
  return (
    <div>
       <h1 style={{
        color: error ? 'red' : 'green',
        backgroundColor: error ? 'yellow' : 'black',
         }} >akash</h1>
    </div>
  )
}

export default CssDynamicStyle
import React from 'react'
import Child from './Child'

function Parent() {


    const receiveChildData = (ReceiveDataFromChild)=>{
      console.log(ReceiveDataFromChild);
    }
  return (
    <div>
        <Child  onSentToChild = {receiveChildData} />
    </div>
  )
}

export default Parent
import React from 'react'
import Child from './Child'

function Parent() {

    const sentDataParentToChild=(catchChildData)=>{
       console.log("Parent" + catchChildData);
    }

  return (
    <div>
        <Child  onSentData={sentDataParentToChild} />
    </div>
  )
}

export default Parent
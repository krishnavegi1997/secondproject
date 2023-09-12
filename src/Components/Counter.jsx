import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>{inc()}}>Increment</button>
        <button onClick={()=>{dec()}}>Decrement</button>
    </div>
  )
}

export default Counter
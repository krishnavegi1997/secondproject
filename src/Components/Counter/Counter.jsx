import React, { useState } from 'react'

function Counter() {
    var [count,setCount]=useState(0);
    function Inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={()=>{Inc()}}>Increment</button> 
       <button onClick={()=>{dec()}}>Decrement</button>
    </div>
  )
}

export default Counter
import React, { useState } from 'react'

function TodoList() {
 const [todos,setTodos]=useState(["sai"])
 const [nt,setNt]=useState('')
 function addtodo(){
setTodos([...todos,nt])
 }
  return (
    <div>
      <input type="text" onChange={(e)=>setNt(e.target.value)}/>
      <button onClick={()=>{addtodo()}}>Add</button>
     {
      todos.map((t,i)=>{
        return<li key={i}>{t}</li>
      })
     }
    </div>
  )
}

export default TodoList
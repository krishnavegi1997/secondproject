import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, deleteTodo } from './todoSlice'
function Todolist() {
  const [nt,setNt]=useState('')
  const {todos}=useSelector((state)=>{return state.t})
  const dispatch =useDispatch()
  return (
    <div>
      <input type="text" onChange={(e)=>setNt(e.target.value)}/>
      <button onClick={()=>{dispatch(addTodo(nt))}}>Add</button>
      <ul>
        {
          todos.map((todo,i)=>{
             return <li key={i}>
              {todo}
              <button onClick={()=>{dispatch(deleteTodo(i))}}>Delete</button>
              </li>
          })
        }
      </ul>
    </div>
  )
}

export default Todolist
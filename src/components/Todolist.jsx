import React, { useState } from 'react'
import { connect } from 'react-redux'

function Todolist(props) {

    const [nt,setNt]=useState('')
  return (
    <div>
       <h1>TodoList</h1>
       <input type="text" onChange={(e)=>setNt(e.target.value)}/>
       <button onClick={()=>{props.addTodoItem(nt)}}>Add</button>
       {
        props.todos.map((todo,i)=>{
          return<li key={i}>{todo}</li>
        })
       }
    </div>
  )
}
function mapStateToProps(state){
  return state.t;
}
function mapDispatchToProps(dispatch){
   return{
    addTodoItem:(newtask)=>{dispatch({type:"ADDTODO",payload:newtask})}
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)
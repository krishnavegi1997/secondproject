import React, { useState } from 'react'
import { connect } from 'react-redux'
function TodoList(props) {
    var [nt,setNt] = useState('')
    return (
        <div>
            <input type="text" onChange={(e) => setNt(e.target.value)} />
            <button onClick={()=>{props.dispatch({type:"AddTodo",payload:nt})}}>AddTodo</button>
            <ul>{
                props.todolist.todos.map((t, i) => {
                    return <li key={i}>
                        {t}
                        <button onClick={() => { props.dispatch({ type: "DeleteTodo" }) }}>AddTodo</button>
                    </li>
                })
            }
            </ul>
        </div>
    )
}
export default connect(function (store) { return store })(TodoList)
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Headers() {
  return (
    <div>
  <Link to='/counter'>Counter</Link>&nbsp;&nbsp;&nbsp;
  <Link to='/todolist'>TodoList</Link>&nbsp;&nbsp;&nbsp;
  <Link to='/aboutus'>Aboutus</Link>&nbsp;&nbsp;&nbsp;
  <Link to="/profile">Profile</Link>&nbsp;&nbsp;&nbsp;

  <Outlet></Outlet>
    </div>
  )
}

export default Headers
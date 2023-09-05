import React from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'


function App() {
  return (
   <div>
     
   <Link to='/apicall'>ApiCall</Link>
   &nbsp;  &nbsp; &nbsp;
   <Link to='/product'>Product</Link>
   <Outlet></Outlet>
  
   </div>
  )
}

export default App
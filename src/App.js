import React from 'react'
import Header from './Components/headers/Header'
import { Outlet } from 'react-router-dom'
function App() {
  return (
  <div>
  <Header/>
  <Outlet/>
  </div>
  )
}

export default App
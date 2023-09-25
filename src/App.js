import React from 'react'
import Headers from './Components/headers/Headers'
import { Outlet } from 'react-router-dom'

function App() {
  return (
  <div>
  <Headers/>
  <Outlet/>
  </div>
  )
}

export default App
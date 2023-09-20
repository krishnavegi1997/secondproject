import React from 'react'
import { store } from './app/store';
import { Provider } from 'react-redux'
import Headers from './shared/Headers';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Headers/>
        <Outlet/>
      </div>
    </Provider>
  )
}

export default App
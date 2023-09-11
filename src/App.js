import React from 'react'
import './App.css'
import store from './store/store'
import {Provider} from 'react-redux' 
import Counter from './store/Counter'
function App() {
  return (
    <Provider store={store}>
         <div>
    <Counter/>
         </div>
    </Provider>
  
  )
}

export default App
import React from 'react'
import {Provider} from 'react-redux'
import store from './store/store'
import Counter from './components/Counter'
import Todolist from './components/Todolist'
function App() {
  return (
    <Provider store={store}>
  <div>
  <Counter></Counter>
  <Todolist/>
  </div>
  </Provider>
  )
}

export default App
import React from 'react'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Counter from './features/counter/Counter'
import Todolist from './features/todolist/Todolist'
function App() {
  return (
   <Provider store={store}>
    <div>
 <Counter/>
 <Todolist></Todolist>
    </div>
   </Provider>
  )
}

export default App
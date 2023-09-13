import React from 'react'
import { connect } from 'react-redux'
import { decrementCount, incrementCount, resetCount } from '../store/actions'
function Counter(props) {
  console.log(props)
  return (
    <div>
        <h1>Counter:{props.count}</h1>
        <button onClick={()=>{props.inc()}}>Increment</button>
        <button onClick={()=>{props.dec()}}>Decrement</button>
        <button onClick={()=>{props.res()}}>Reset</button>
    </div>
  )
}
function mapStateToProps(state){return state.c}

function mapDispatchToProps(dispatch)
{
  return{
    inc:()=>{dispatch(incrementCount())},
    dec:()=>{dispatch(decrementCount())},
    res:()=>{dispatch(resetCount())}
  }
}
export default connect(
 mapStateToProps,
 mapDispatchToProps
  )
  (Counter)
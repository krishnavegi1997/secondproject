const initialState={
    todos:["sai","krishna"]
}
function TodoReducer(state=initialState,action){
    if(action.type==="AddTodo"){
        return{...state,todos:[...state.todos,action.payload]}
    }
    if(action.type==="DeleteTodo"){
        var temp=[...state.todos];
        temp.splice(action.index,1);
        return{...state,todos:[...temp]}
    }
    return state;
}
export default TodoReducer;
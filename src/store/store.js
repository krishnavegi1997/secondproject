import {combineReducers,createStore} from "redux";
import counterReducer from "./counterReducer";
import TodoReducer from "./TodoReducer";
var store =createStore(combineReducers({counter:counterReducer,todolist:TodoReducer}))
export default store;

import {combineReducers,createStore} from "redux";
import CounterReducer from "../reducers/CounterReducer";
import todoReducer from "../reducers/todoReducer";
const reducer = combineReducers({c:CounterReducer,t:todoReducer});
const store = new createStore(reducer);
export default store;
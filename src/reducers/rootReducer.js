import { combineReducers } from "redux";
import global from "./globalReducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  global,
  routing: routerReducer
});

export default rootReducer;

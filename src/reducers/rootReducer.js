import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import global from "src/reducers/globalReducer";


const rootReducer = combineReducers({
  global,
  routing: routerReducer
});

export default rootReducer;

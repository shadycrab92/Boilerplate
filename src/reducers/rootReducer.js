import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import globalReducer from "src/reducers/globalReducer";

const rootReducer = combineReducers({
  globalReducer,
  routing: routerReducer
});

export default rootReducer;

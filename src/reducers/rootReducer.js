import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import global from "src/reducers/globalReducer";
import publication from "src/reducers/publicationReducer";

const rootReducer = combineReducers({
  global,
  publication: publication,
  routing: routerReducer
});

export default rootReducer;

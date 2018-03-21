import {EXAMPLE_ACTION} from "../constants/actionTypes";

export default function fuelSavingsReducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case EXAMPLE_ACTION:
      newState.param = action.param;
      break;

    default:
      break;
  }

  return newState;
}

const initialState = {
  param: ""
};

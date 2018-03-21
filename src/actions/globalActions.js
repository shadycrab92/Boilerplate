import * as types from "../constants/actionTypes";

export function exampleAction(param) {
  return function (dispatch) {
    return dispatch({
      type: types.EXAMPLE_ACTION,
      param: param
    });
  };
}
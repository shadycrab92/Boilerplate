import * as publicationApi from "src/api/publication";
import {actionTypes} from "src/constants/_all";


export function get_publications(userId, orderBy, page, search) {
  return function (dispatch) {
    publicationApi.get(userId, orderBy, page, search).then((response) => {
      dispatch({
        type: response.internalServerError ?
          actionTypes.Publication.GET_FAILED :
          actionTypes.Publication.GET_SUCCESS,
        publications: response.result || null
      });
    });

    dispatch({
      type: actionTypes.Publication.GET
    });
  };
}

export function set_page(page) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.Publication.SET_PAGE,
      page: page
    });
  };
}
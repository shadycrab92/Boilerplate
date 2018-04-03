import * as publicationApi from "src/api/publication";
import {actionTypes} from "src/constants/_all";


export function get_list(userId, orderBy, page, search) {
  return function (dispatch) {
    publicationApi.get_list(userId, orderBy, page, search).then((response) => {
      dispatch({
        type: response.internalError ?
          actionTypes.Publication.GET_LIST_FAILED :
          actionTypes.Publication.GET_LIST_SUCCESS,
        publications: response.result || []
      });
    });

    dispatch({
      type: actionTypes.Publication.GET
    });
  };
}

export function get_one(publicationId) {
  return function (dispatch) {
    publicationApi.get_one(publicationId).then((response) => {
      dispatch({
        type: response.internalError ?
          actionTypes.Publication.GET_FAILED :
          actionTypes.Publication.GET_SUCCESS,
        publication: response.result || {}
      });
    });

    dispatch({
      type: actionTypes.Publication.GET
    });
  };
}

export function get_comments_list(publicationId, page) {
  return function (dispatch) {
    publicationApi.get_comments_list(publicationId, page).then((response) => {
      dispatch({
        type: response.internalError ?
          actionTypes.Publication.GET_COMMENTS_LIST_FAILED :
          actionTypes.Publication.GET_COMMENTS_LIST_SUCCESS,
        comments: response.result || []
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
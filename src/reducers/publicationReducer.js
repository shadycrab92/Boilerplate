import { orderingTypes, loadingTypes, actionTypes } from "src/constants/_all";

export default function publicationReducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case actionTypes.Publication.GET:
      newState.loading = loadingTypes.PROGRESS;
      break;
    case actionTypes.Publication.GET_SUCCESS:
      newState.loading = loadingTypes.SUCCESS;
      newState.list = action.publications
      break;
    case actionTypes.Publication.GET_FAILED:
      newState.loading = loadingTypes.FAILED;
      break;
    case actionTypes.Publication.SET_PAGE:
      newState.page = action.page;
      break;
    default:
      break;
  }

  return newState;
}

const initialState = {
  list: [],
  one: {},
  page: 0,
  search: "",
  order: orderingTypes.Date.DEFAULT,
  loading: loadingTypes.DEFAULT
};

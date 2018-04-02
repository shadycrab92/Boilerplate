import {createStore, compose, applyMiddleware} from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "src/reducers/rootReducer";

export const history = createHistory();

function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    thunk,
    reactRouterMiddleware,
  ];

  return createStore(rootReducer, initialState, compose (
      applyMiddleware(...middlewares)
    )
  );
}

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk,
    logger,
    reactRouterMiddleware
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers (
      applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    module.hot.accept("../reducers/rootReducer", () => {
      const nextReducer = require("../reducers/rootReducer").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === "production" ? configureStoreProd : configureStoreDev;

export default configureStore;

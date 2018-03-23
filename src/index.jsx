import "src/styles/bulma/bulma.sass";
import "src/favicon.ico";

import React from "react";
import { render } from "react-dom";
import configureStore, { history } from "./store/configureStore";

import Root from "src/app/Root";


const store = configureStore();

render(
  <Root store={store} history={history} />,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept("./app/Root", () => {
    const NewRoot = require("./app/Root").default;
    render(
      <NewRoot store={store} history={history} />,
      document.getElementById("root"),
    );
  });
}

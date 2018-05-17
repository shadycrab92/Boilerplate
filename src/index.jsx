import "src/styles/global.sass";
import "src/favicon.ico";

import React from "react";
import { render } from "react-dom";
import moment from "moment";
import configureStore, { history } from "./store/configureStore";

import Root from "src/app/Root";

moment.locale("ru");

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

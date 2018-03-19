import React from "react";
import { render } from "react-dom";
import Root from "./app/Root";

require("./favicon.ico");

const store = configureStore();

if (!module.hot) {
  render(
    <Root/>,
    document.getElementById("app"),
  );
} else {
  module.hot.accept("./app/Root", () => {
    const NewRoot = require("./app/Root").default;
    render(
      <NewRoot store={store} history={history} />,
      document.getElementById("app"),
    );
  });
}

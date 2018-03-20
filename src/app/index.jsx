import React from "react";
import { render } from "react-dom";
import "./favicon.ico";
import Root from "./Root";

render(
  <Root />,
  document.getElementById("root"),
);

if (!module.hot) {
  module.hot.accept("./Root", () => {
    const NewRoot = require("./Root").default;
    render(
      <NewRoot />,
      document.getElementById("root"),
    );
  });
}

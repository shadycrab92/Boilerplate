import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import NotFoundPage from "src/pages/NotFoundPage";
import Publication from "src/pages/Publication";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Publication} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

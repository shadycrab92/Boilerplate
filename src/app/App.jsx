import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import NotFoundPage from "src/pages/NotFoundPage";
import HomePage from "src/pages/HomePage";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

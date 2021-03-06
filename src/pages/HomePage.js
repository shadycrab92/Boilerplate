import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as globalActions from "src/actions/globalActions";

import Field from "src/components/home/field/Field";

export class HomePage extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <section className="homePage">
        <div className="container">
          <Field/>
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  globalActions: PropTypes.object.isRequired,
  globalReducer: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    globalReducer: state.globalReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    globalActions: bindActionCreators(globalActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);


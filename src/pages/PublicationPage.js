import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as publicationActions from "src/actions/publicationActions";
import {loadingTypes} from "src/constants/_all";

import Navbar from "src/components/shared/navbar/Navbar"
import Dashboard from "src/components/shared/dashboard/Dashboard"
import Publication from "src/components/publication/Publication"
import Comments from "src/components/shared/comments/Comments"

export class PublicationPage extends Component {
  constructor(){
    super();

    this.loadPublication = ::this.loadPublication;
  }

  componentDidMount(){
    this.loadPublication();
  }

  loadPublication(){
    const publicationId = this.props.match.params.id;
    const publicationReducer = this.props.publication;

    this.props.publicationActions.get_one(publicationId);
    this.props.publicationActions.get_comments_list(publicationId, publicationReducer.pageComments);
  }

  render() {
    const publicationReducer = this.props.publication;
    const commentsProps = {
      comments: publicationReducer.comments,
      page: publicationReducer.pageComments,
      isLoading: publicationReducer.loadingComments == loadingTypes.PROGRESS,

      setCommentsPage: this.setCommentsPage
    };

    const publicationProps = {... publicationReducer.one};


    return (
      <section className="publicationPage">
        <Navbar/>
        <Dashboard/>
        <Publication {... publicationProps}/>
        <Comments {... commentsProps}/>
      </section>
    );
  }
}

PublicationPage.propTypes = {
  publicationActions: PropTypes.object.isRequired,
  publication: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    publication: state.publication
  };
}

function mapDispatchToProps(dispatch) {
  return {
    publicationActions: bindActionCreators(publicationActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicationPage);


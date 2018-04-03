import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as publicationActions from "src/actions/publicationActions";
import {loadingTypes} from "src/constants/_all";

import Navbar from "src/components/shared/navbar/Navbar"
import Publications from "src/components/publications/Publications"
import Dashboard from "src/components/shared/dashboard/Dashboard"

export class PublicationsPage extends Component {
  constructor(){
    super();

    this.loadPublications = ::this.loadPublications;
    this.setPublicationsPage = ::this.setPublicationsPage;
  }

  componentDidMount(){
    this.loadPublications();
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    const prevPublicationReducer = prevProps.publication;
    const publicationReducer = this.props.publication;

    if(prevPublicationReducer.page != publicationReducer.page){
      this.loadPublications();
    }
  }

  loadPublications(){
    const publicationReducer = this.props.publication;

    this.props.publicationActions.get_list("", publicationReducer.order, publicationReducer.page, publicationReducer.search);
  }

  setPublicationsPage(page){
    this.props.publicationActions.set_page(page);
  }

  render(){
    const publicationReducer = this.props.publication;

    const publicationsProps = {
      publications: publicationReducer.list,
      page: publicationReducer.page,
      isLoading: publicationReducer.loading == loadingTypes.PROGRESS,

      setPublicationsPage: this.setPublicationsPage
    };

    return (
      <section className="authorPage">
        <Navbar/>
        <Dashboard/>
        <Publications {... publicationsProps}/>
      </section>
    );
  }
}

PublicationsPage.propTypes = {
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
)(PublicationsPage);


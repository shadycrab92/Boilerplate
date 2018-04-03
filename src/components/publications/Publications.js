import React, {Component} from "react";
import "./publications.sass";

import Spinner from "src/components/shared/spinner/Spinner";
import PublicationItem from "src/components/publications/PublicationItem";


export default class Publications extends Component {
  constructor(){
    super();

    this.nextPage = ::this.nextPage;
  }

  nextPage(){
    this.props.setPublicationsPage(this.props.page + 1);
  }

  render(){
    return (
      <section className="publications">
        <div className="container">
          {
            this.props.publications.map((el, i)=>{
              return <PublicationItem
                key={i}
                id={el.id}
                title={el.title}
                text={el.previewText}
                image={el.previewImage}
                imageText={el.previewImageText}
                created={el.created}
                isLocked={el.isLocked}
              />
            })
          }

          {
            this.props.isLoading && <Spinner />
          }

          <div className="publications__bottom">
            <button className="button is-primary" onClick={this.nextPage}>Загрузить еще</button>
          </div>
        </div>
      </section>
    );
  }
}

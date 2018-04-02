import React from "react";

import {dateFormatting} from "src/utils/_all"

const PublicationItem = (props) => {
  return (
    <article className="publicationsItem">
      <div className="publicationsItem__content">
        <h1 className="publicationsItem__title">{props.title}</h1>
        <p className="publicationsItem__date">
          {dateFormatting.friendlyFormat(props.created)}
        </p>
        {
          props.image && (
            <div className="publicationsItem__image">
              <figure style={{backgroundImage: `url(${props.image})`}}/>
              {
                props.imageText && (
                  <p>{props.imageText}</p>
                )
              }
            </div>
          )
        }
        <p className="publicationsItem__paragraph">
          {props.text}
        </p>
        <div className="is-clearfix publicationsItem__bottom">
          <span className="publicationsItem__controls">
             {
              props.isLocked ?
                <a className="button is-info is-outlined">
                 <span className="icon">
                   <i className="fas fa-lock-open"></i>
                 </span>
                  <span>Получить доступ</span>
                </a> :
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                  <span>Читать дальше</span>
                </a>
             }
          </span>

          <span className="publicationsItem__stats">
            <span className="publicationsItem__stat">
              <span className="icon">
                <i className="fas fa-eye"/>
              </span>
              <span>
                1
              </span>
            </span>
            <span className="publicationsItem__stat">
              <span className="icon">
                <i className="fas fa-comment"/>
              </span>
              <span>
                3
              </span>
            </span>
             <span className="publicationsItem__stat publicationsItem__stat--like">
              <span className="icon">
               <i className="far fa-heart"/>
              </span>
              <span>1</span>
             </span>
          </span>
        </div>
      </div>
    </article>
  );
};

export default PublicationItem;


import React from "react";
import "./publication.sass";

import PublicationTextPopup from "./PublicationTextPopup";
import PublicationYoutubePopup from "./PublicationYoutubePopup";

import Text from "./blocks/Text";
import Image from "./blocks/Image";

import {dateFormatting} from "src/utils/_all"


const Publication = (props) => {
  return (
    <section className="publication">
      <div className="container">
        <div className="publication__content">
          <h1 className="publication__title">{props.title}</h1>
          <p className="publicationsItem__date">
            {dateFormatting.friendlyFormat(props.created)}
          </p>

          {
            props.previewImage &&
              <Image image={props.previewImage} imageText={props.previewImageText}/>
          }

          <Text text={props.previewText}/>

         
          <div className="publication__addBlock publication__addBlockButton">
            <h3>Добавить блок</h3>
            <div className="publication__addBlockButtons">
              <a className="button is-large publication__addBlockButton">
                <span className="icon is-medium">
                  <i className="fas fa-font fa-2x"></i>
                </span>
              </a>
              <a className="button is-large publication__addBlockButton">
                <span className="icon is-medium">
                  <i className="fas fa-image fa-2x"></i>
                </span>
              </a>
              <a className="button is-large publication__addBlockButton publication__addBlockButton--youtube">
                <span className="icon is-medium">
                  <i className="fab fa-youtube fa-2x"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="is-clearfix publicationsItem__bottom">
            <span className="publication__controls">
               <a className="button is-info">
                   <span className="icon">
                     <i className="fas fa-lock-open"></i>
                   </span>
                 <span>Получить доступ</span>
               </a>
              {
                false &&
                <a className="button is-primary is-outlined">
                    <span className="icon">
                      <i className="fas fa-gift"></i>
                    </span>
                  <span>Поддержать</span>
                </a>
              }
            </span>
            <span className="publication__stats">
              <span className="publication__stat">
                <span className="icon">
                  <i className="fas fa-eye"/>
                </span>
                <span>
                  1
                </span>
              </span>
              <span className="publication__stat">
                <span className="icon">
                  <i className="fas fa-comment"/>
                </span>
                <span>
                  3
                </span>
              </span>
              <span className="publication__stat publication__stat--like">
                <span className="icon">
                 <i className="far fa-heart"/>
                </span>
                <span>1</span>
              </span>
            </span>
          </div>
        </div>

        {false && <PublicationTextPopup/>}
        {false && <PublicationImagePopup/>}
        {false && <PublicationYoutubePopup/>}
      </div>
    </section>
  );
};

export default Publication;


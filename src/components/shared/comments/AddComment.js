import React from "react";
import "./comment.sass";

const AddComment = () => {
  return (
    <section className="comment">
        <div className="comment__content">
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64 comment__avatar">
                <img src="https://bulma.io/images/placeholders/128x128.png"/>
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <div className="field">
                  <p className="control">
                    <textarea className="textarea" placeholder="Напишите сообщение..."></textarea>
                  </p>
                </div>
                <div className="level">
                  <span className="comment__send">
                     <a className="button is-primary is-fullwidth">Отправить</a>
                  </span>
                </div>
              </div>
            </div>
          </article>
      </div>
    </section>
  );
};

export default AddComment;


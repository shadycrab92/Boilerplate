import React from "react";
import "./comment.sass";

const Comment = () => {
  return (
    <div className="comment">
        <div className="comment__content">
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64 comment__avatar">
                <img src="https://bulma.io/images/placeholders/128x128.png"/>
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <div className="comment__text">
                  <strong>John Smith</strong> <span className="comment__date">18.04.2018 в 12:15</span>
                  <br/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </div>
                <p>
                   <span className="comment__stat comment__stat--like">
                     <span className="icon">
                       <i className="far fa-heart"/>
                     </span>
                     <span>1</span>
                   </span>
                </p>
              </div>
            </div>
          </article>
      </div>
    </div>
  );
};

export default Comment;

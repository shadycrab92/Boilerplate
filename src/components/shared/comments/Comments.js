import React from "react";
import "./comments.sass";

import Comment from "src/components/shared/comments/Comment"
import AddComment from "src/components/shared/comments/AddComment"

const Comments = () => {
  return (
    <section className="comments">
      <div className="container">
        <div className="comments__content">
          <h3 className="comments__title">119 комментариев</h3>
          <div className="comments__item comments__item--add">
            <AddComment/>
          </div>
          <div className="comments__item">
            <Comment/>
          </div>
          <div className="comments__item">
            <Comment/>
          </div>
          <div className="comments__item">
            <Comment/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;


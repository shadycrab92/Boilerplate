import React from "react";
import "../publication.sass";


const Text = (props) => {
  return (
    <div className="publication__text">
      {
        props.title &&
          <h3 className="publication__subtitle"> {props.title}</h3>
      }
      <p className="publication__paragraph">
        {props.text}
      </p>
    </div>
  );
};

export default Text;


import React from "react";
import "../publication.sass";


const Image = (props) => {
  return (
    <div className="publication__image">
      <figure style={{backgroundImage: `url(${props.image})`}}/>
      {
        props.imageText && (
          <p>{props.imageText}</p>
        )
      }
    </div>
  );
};

export default Image;


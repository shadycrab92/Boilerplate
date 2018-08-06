import React from "react";
import "./button.sass";

const Button = (props) => {
  return (
    <button className={`button ${props.styles} ${props.className}`} onClick={props.onClick}>
      {
        props.icon &&
          <span className="icon is-small is-left">
                <i className={`fas fa-${props.icon}`}/>
          </span>
      }
      <span>
        {props.children}
      </span>
    </button>
  );
};

export default Button;


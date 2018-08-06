import React from "react";
import "./input.sass";

const Input = (props) => {
  return (
    <div  className={`field ${props.styles} ${props.className}`}>
      <label className="label">{props.label}</label>
      <div className={`control ${props.icon ? "has-icons-left" : ""}`}>
        <input className={`input ${props.error ? "is-danger" : ""}`} type={props.type || "text"} placeholder={props.placeholder}/>
        {
          props.icon &&
            <span className="icon is-small is-left">
              <i className={`fas fa-${props.icon}`}/>
            </span>
        }
      </div>
      {
        props.error && <p className="help is-danger">{props.error}</p>
      }
    </div>
  );
};

export default Input;


import React from "react";

const Input = (props) => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control has-icons-left">
        <input className={`input ${props.error && "is-danger"}`} type={props.type || "text"} placeholder={props.placeholder}/>
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


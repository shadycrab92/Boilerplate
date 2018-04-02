import React from "react";
import "./spinner.sass";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__cube spinner__cube--cube1"></div>
      <div className="spinner__cube spinner__cube--cube2"></div>
      <div className="spinner__cube spinner__cube--cube4"></div>
      <div className="spinner__cube spinner__cube--cube3"></div>
    </div>
  );
};

export default Spinner;


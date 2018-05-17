import React from "react";
import "./header.sass";

import logo from "src/static/logo.svg";

const Header = (props) => {
  return (
    <section className="homeHeader">
      <div className="homeHeader__logo">
        <img className="homeHeader__icon" src={logo}/>
        <span className="homeHeader__text">SmartFoods</span>
      </div>
    </section>
  );
};

export default Header;


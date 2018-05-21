import React from "react";
import { Link } from "react-router-dom";
import "./header.sass";

import logo from "src/static/logo.svg";

const Header = (props) => {
  return (
    <section className="homeHeader">
      <div className="homeHeader__content">
        <img className="homeHeader__icon" src={logo}/>
        <nav className="homeHeader__nav">
          <Link className="homeHeader__link" to="/">Пельмени</Link>
          <Link className="homeHeader__link" to="/contacts">Контакты</Link>
        </nav>
      </div>
    </section>
  );
};

export default Header;


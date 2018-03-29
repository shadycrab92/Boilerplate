import React from "react";
import "./navbar.sass";

import LoginPopup from "./LoginPopup"

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
      <div className="container">
        <div className="navbar__content">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <figure className="image is-32x32">
                <img className="navbar__avatar" src="https://placeimg.com/72/72/people"/>
              </figure>
              Ivan Petrov
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item navbar-item--subscribe">
                 <span>
                    <span className="icon">
                      <i className="fa fa-plus"></i>
                    </span>
                    <span>Подписаться</span>
                 </span>
              </a>
            </div>
            <div className="navbar-end">
              <a className="navbar-item navbar-item--login">
                Войти
              </a>
            </div>
          </div>
        </div>
      </div>
      {
        false && <LoginPopup/>
      }
    </nav>
  );
};

export default Navbar;


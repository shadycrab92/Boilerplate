import React, {Component} from "react";
import "./navbar.sass";

import LoginPopup from "./LoginPopup"

export default class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      isShowLogin: false
    };

    this.setShowLogin = ::this.setShowLogin;
  }

  setShowLogin(val){
    this.setState({
      isShowLogin: val
    })
  }

  render(){
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
                <a className="navbar-item navbar-item--login" onClick={()=>{this.setShowLogin(true)}}>
                  Войти
                </a>
              </div>
            </div>
          </div>
        </div>
        {
          this.state.isShowLogin && <LoginPopup onClose={()=>{this.setShowLogin(false)}}/>
        }
      </nav>
    );
  }
}

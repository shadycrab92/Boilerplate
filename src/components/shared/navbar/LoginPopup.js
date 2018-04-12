import React, {Component} from "react";
import "./loginPopup.sass";

import Input from "src/components/shared/ui/input/Input"

export default class LoginPopup extends Component {
  constructor(props){
    super(props);

    this.state = {
      isRegister: false
    };

    this.setRegister = ::this.setRegister;
    this.onClose = ::this.onClose;
  }

  setRegister(val){
    this.setState({
      isRegister: val
    })
  }

  onClose(){
    this.props.onClose();
  }

  render(){
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.onClose}></div>
        <div className="modal-content">
          <div className="loginPopup">
            <div className="loginPopup__content">
                {
                  this.state.isRegister ?
                    <h3 className="loginPopup__title">
                      Регистрация
                      <a className="button is-info is-pulled-right" onClick={()=>{this.setRegister(false)}}>Уже есть учетная запись</a>
                    </h3>:
                    <h3 className="loginPopup__title">
                      Вход
                      <a className="button is-info is-pulled-right" onClick={()=>{this.setRegister(true)}}>У меня еще нет учетной записи</a>
                    </h3>
                }

              <Input label={"E-mail"} type={"text"} placeholder={"example@domain.com"} icon={"envelope"}/>

              {
                this.state.isRegister &&
                  <Input label={"Имя"} type={"text"} placeholder={"John Smith"} icon={"user-circle"}/>
              }

              <Input label={"Пароль"} type={"password"} placeholder={"●●●●●●"} icon={"key"}/>
            </div>
            <div className="loginPopup__footer">
              <div className="control">

                {
                  this.state.isRegister ?
                    <button className="button is-primary is-medium is-fullwidth">
                      Зарегистрироваться
                    </button>:
                    <button className="button is-primary is-medium is-fullwidth">
                      Войти
                    </button>
                }

              </div>
            </div>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.onClose}/>
      </div>
    )
  }
}
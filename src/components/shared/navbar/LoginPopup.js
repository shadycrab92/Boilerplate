import React from "react";
import "./loginPopup.sass";

const LoginPopup = () => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="loginPopup">
          <div className="loginPopup__content">
            <h3 className="loginPopup__title">
              Вход
              <a className="button is-info is-pulled-right">Зарегистрироваться</a>
            </h3>
            <div class="field">
              <label class="label">E-mail</label>
              <div class="control has-icons-left">
                <input class="input is-danger" type="email" placeholder="example@domain.com"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"/>
                </span>
              </div>
              <p class="help is-danger">This email is invalid</p>
            </div>

            {
              true &&
              <div class="field">
                <label class="label">Имя</label>
                <div class="control has-icons-left">
                  <input class="input is-danger" type="text" placeholder="John Smith"/>
                  <span class="icon is-small is-left">
                  <i class="fas fa-user-circle"/>
                </span>
                </div>
                <p class="help is-danger">This email is invalid</p>
              </div>
            }

            <div class="field">
              <label class="label">Пароль</label>
              <div class="control has-icons-left">
                <input class="input is-danger" type="password" placeholder="●●●●●●"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-key"/>
                </span>
              </div>
              <p class="help is-danger">This email is invalid</p>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary">Войти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};

export default LoginPopup;


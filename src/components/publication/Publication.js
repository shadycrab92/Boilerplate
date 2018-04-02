import React from "react";
import "./publication.sass";

import PublicationTextPopup from "./PublicationTextPopup";
import PublicationYoutubePopup from "./PublicationYoutubePopup";

const Publication = () => {
  return (
    <section className="publication">
      <div className="container">
        <div className="publication__content">
          <h1 className="publication__title">Залезаем во внутреннее хранилище Android M</h1>
          <p className="publicationsItem__date">
            18.04.1992 в 12:01
          </p>
          <p className="publication__paragraph">
            <span className="publication__blockButtons">
              <a className="button is-primary is-outlined">
                <span className="icon is-small">
                  <i className="fas fa-edit"></i>
                </span>
              </a>
              <a className="button is-primary is-outlined">
                <span className="icon is-small">
                  <i className="fas fa-chevron-up"></i>
                </span>
              </a>
              <a className="button is-primary is-outlined">
                <span className="icon is-small">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </a>
            </span>

            В Android 6.0 ввели функцию, позволяющую отформатировать карту памяти так, чтобы она являлась не отдельным хранилищем,
            а придатком ко внутренней памяти. Это позволяет избежать путаницы с двумя хранилищами данных,
            особенно при ручной установке некоторых не всегда честно купленных крупных приложений, поставляемых по частям.
            Однако есть один нюанс: при этом всём нам наглухо блокируют доступ к карте напрямую. Хочешь что-то передать на устройство — используй MTP со всеми вытекающими,
            вроде скорости передачи файлов, сравнимой с прогулочным шагом контуженной черепахи. Карту теперь не только к ПК через кабель напрямую нельзя подключить: её и из
            выключенного телефона через кардридер просто так не смонтируешь, ведь она отформатирована в нечто неизвестное ни науке, ни нашим компьютерам.
          </p>
          <h3 className="publication__subtitle">Залезаем во внутреннее хранилище Android M</h3>
          <p className="publication__paragraph">
            Рекомендуется для ежедневного использования. Судя по всему, даже не требует рут. Всё, что понадобится — это ADB. Те, кто в курсе, могут пролистать до второго способа.
            С передачей всё просто: первый аргумент — откуда, второй аргумент — куда. /sdcard — то место, куда на Андроиде монтируется доступное пользователю хранилище, т.е.
            корневой каталог штатного файлового менеджера почти любого девайса на Андроиде.
          </p>
          <div className="publication__image">
            <figure style={{backgroundImage: "url(https://picsum.photos/1920/1080/?random)"}}/>
            <p>Рекомендуется для ежедневного использования. Судя по всему, даже не требует рут.</p>
          </div>

          <p className="publication__paragraph">
            Рекомендуется для ежедневного использования. Судя по всему, даже не требует рут. Всё, что понадобится — это ADB. Те, кто в курсе, могут пролистать до второго способа.
            С передачей всё просто: первый аргумент — откуда, второй аргумент — куда. /sdcard — то место, куда на Андроиде монтируется доступное пользователю хранилище, т.е.
            корневой каталог штатного файлового менеджера почти любого девайса на Андроиде.
          </p>
          <div className="publication__addBlock publication__addBlockButton">
            <h3>Добавить блок</h3>
            <div className="publication__addBlockButtons">
              <a className="button is-large publication__addBlockButton">
                <span className="icon is-medium">
                  <i className="fas fa-font fa-2x"></i>
                </span>
              </a>
              <a className="button is-large publication__addBlockButton">
                <span className="icon is-medium">
                  <i className="fas fa-image fa-2x"></i>
                </span>
              </a>
              <a className="button is-large publication__addBlockButton publication__addBlockButton--youtube">
                <span className="icon is-medium">
                  <i className="fab fa-youtube fa-2x"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="is-clearfix publicationsItem__bottom">
            <span className="publication__controls">
               <a className="button is-info">
                   <span className="icon">
                     <i className="fas fa-lock-open"></i>
                   </span>
                 <span>Получить доступ</span>
               </a>
              {
                false &&
                <a className="button is-primary is-outlined">
                    <span className="icon">
                      <i className="fas fa-gift"></i>
                    </span>
                  <span>Поддержать</span>
                </a>
              }
            </span>
            <span className="publication__stats">
              <span className="publication__stat">
                <span className="icon">
                  <i className="fas fa-eye"/>
                </span>
                <span>
                  1
                </span>
              </span>
              <span className="publication__stat">
                <span className="icon">
                  <i className="fas fa-comment"/>
                </span>
                <span>
                  3
                </span>
              </span>
              <span className="publication__stat publication__stat--like">
                <span className="icon">
                 <i className="far fa-heart"/>
                </span>
                <span>1</span>
              </span>
            </span>
          </div>
        </div>

        {false && <PublicationTextPopup/>}
        {false && <PublicationImagePopup/>}
        {false && <PublicationYoutubePopup/>}
      </div>
    </section>
  );
};

export default Publication;


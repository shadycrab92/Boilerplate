import React from "react";

const PublicationItem = () => {
  return (
    <article className="publicationsItem">
      <div className="publicationsItem__content">
        <h1 className="publicationsItem__title">В Android 6.0 ввели функцию, позволяющую отформатировать карту памяти</h1>
        <p className="publicationsItem__date">
          18.04.1992 в 12:01
        </p>
        <div className="publicationsItem__image">
          <figure style={{backgroundImage: "url(https://picsum.photos/1920/1080/?random)"}}/>
          <p>Рекомендуется для ежедневного использования. Судя по всему, даже не требует рут.</p>
        </div>
        <p className="publicationsItem__paragraph">
          В Android 6.0 ввели функцию, позволяющую отформатировать карту памяти так, чтобы она являлась не отдельным хранилищем,
          а придатком ко внутренней памяти. Это позволяет избежать путаницы с двумя хранилищами данных,
          особенно при ручной установке некоторых не всегда честно купленных крупных приложений, поставляемых по частям.
          Однако есть один нюанс: при этом всём нам наглухо блокируют доступ к карте напрямую. Хочешь что-то передать на устройство — используй MTP со всеми вытекающими,
          вроде скорости передачи файлов, сравнимой с прогулочным шагом контуженной черепахи. Карту теперь не только к ПК через кабель напрямую нельзя подключить: её и из
          выключенного телефона через кардридер просто так не смонтируешь, ведь она отформатирована в нечто неизвестное ни науке, ни нашим компьютерам.
        </p>
        <div className="is-clearfix publicationsItem__bottom">
          <span className="publicationsItem__controls">
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

          <span className="publicationsItem__stats">
            <span className="publicationsItem__stat">
              <span className="icon">
                <i className="fas fa-eye"/>
              </span>
              <span>
                1
              </span>
            </span>
            <span className="publicationsItem__stat">
              <span className="icon">
                <i className="fas fa-comment"/>
              </span>
              <span>
                3
              </span>
            </span>
             <span className="publicationsItem__stat publicationsItem__stat--like">
              <span className="icon">
               <i className="far fa-heart"/>
              </span>
              <span>1</span>
             </span>
          </span>
        </div>
      </div>
    </article>
  );
};

export default PublicationItem;


import React from "react";

const PublicationItem = () => {
  return (
    <article className="publicationsItem">
      <div className="publicationsItem__content">
        <div className="is-clearfix publicationsItem__top">
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
                  <i className="fas fa-ruble-sign"/>
                </span>
                <span>
                  2
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
            </span>
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
        </div>

        <h1 className="publicationsItem__title">Заголовок</h1>
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
      </div>
    </article>
  );
};

export default PublicationItem;


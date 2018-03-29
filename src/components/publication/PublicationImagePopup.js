import React from "react";

const PublicationImagePopup = () => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="publicationPopup">
          <div className="publicationPopup__content">
            <h3 className="publicationPopup__title">
              Редактирование фото
            </h3>
            <div class="field">
              <label class="label">Заголовок</label>
              <div class="control">
                <input class="input" type="text" placeholder="Заголовок..."/>
              </div>
            </div>
            <div class="field">
              <label class="label">Подпись</label>
              <div class="control">
                <input class="input" type="text" placeholder="Подпись..."/>
              </div>
            </div>
            <div>
              <button className="button is-danger">
                Удалить
              </button>
              <button className="button is-primary is-pulled-right">
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};

export default PublicationYoutubePopup;


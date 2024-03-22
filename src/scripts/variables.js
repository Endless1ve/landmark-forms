import closePopupImage from "../images/closePopup.svg";

const body = document.querySelector(".body");
const forms = document.querySelectorAll(".form");
const openPopupButtons = document.querySelectorAll(".openButton");

const preloader = `<span class="preloader"></span>`;

const popupTemplate = `
<div class="popup">
  <div class="popupContent">
    <img src="${closePopupImage}" alt="" class="closePopup">
    <h2 class="popupTitle">Связаться с нами</h2>
  </div>
</div>
`;

const validatePatterns = {
  required: "Обязательное поле",
  phone: {
    pattern: "^(\\+7 \\(([49]\\d{2})\\) \\d{3} - \\d{2} - \\d{2})$",
    message: "Некорректный номер телефона.",
  },
  email: {
    pattern:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    message: "Некорректный email",
  },
  file: {
    message: "Только pdf файлы",
  },
};

const popupForms = {
  service: `<form class="form popupForm">
          <div class="inputGroup">
          <input class="formInput popupInput" type="text" placeholder="ИМЯ*" name="your-name" data-required oninput="this.value = this.value.replace(/[^a-zA-Zа-яА-ЯЁё-]/g, '')"/>
          <div class="errorBlock">
            <span class="errorText"></span>
          </div>
        </div>
        <div class="inputGroup">
          <input class="formInput popupInput" type="tel" placeholder="ТЕЛЕФОН" name="your-tel" />
          <div class="errorBlock">
            <span class="errorText"></span>
          </div>
        </div>
        <div class="inputGroup">
          <input class="formInput popupInput" type="email" placeholder="EMAIL*" name="your-email" data-required />
          <div class="errorBlock">
            <span class="errorText"></span>
          </div>
        </div>
        <p class="formAcceptance popupAcceptance">
          Нажимая кнопку "Отправить", вы соглашаетесь с
          <strong><a class="acceptanceLink" href="https://landmark-law.ru/users-agreement/">условиями обработки персональных данных</a></strong>
        </p>
        <button class="formSubmit popupSubmit">Отправить</button>
      </form>`,
  career: `<form class="form popupForm">
          <div class="inputGroup">
          <input class="formInput popupInput" type="text" placeholder="ИМЯ*" name="your-name" data-required oninput="this.value = this.value.replace(/[^a-zA-Zа-яА-ЯЁё-]/g, '')"/>
          <div class="errorBlock">
            <span class="errorText"></span>
          </div>
        </div>
        <div class="inputGroup">
          <input class="formInput popupInput" type="tel" placeholder="ТЕЛЕФОН" name="your-tel" />
          <div class="errorBlock">
            <span class="errorText"></span>
          </div>
        </div>
        <div class="inputGroup">
          <input class="formInput popupInput" type="email" placeholder="EMAIL*" name="your-email" data-required />
          <div class="errorBlock">
            <span class="errorText"></span>
          </div>
        </div>
        <div class="inputGroup">
          <image class="fileButton" src='${closePopupImage}'>
          <label class="fileLabel" for="file">Выберите файл...</label>
          <input class="fileInput" id="file" type="file" accept=".pdf" name="your-file">
          <div class="errorBlock">
            <span class="errorText"></span>
          </div>
        </div>
        <p class="formAcceptance popupAcceptance">
          Нажимая кнопку "Отправить", вы соглашаетесь с
          <strong><a class="acceptanceLink" href="https://landmark-law.ru/users-agreement/">условиями обработки персональных данных</a></strong>
        </p>
        <button class="formSubmit popupSubmit">Отправить</button>
      </form>`,
};

const popupResultElement = `
<div class="popup resultPopup">
  <div class="popupContent">
    <img src="${closePopupImage}" alt="" class="closePopup">
    <h2 class="popupTitle"></h2>
    <p class="popupText"></p>
  </div>
</div>
`;

export {
  body,
  forms,
  openPopupButtons,
  popupTemplate,
  validatePatterns,
  popupForms,
  preloader,
  popupResultElement,
};

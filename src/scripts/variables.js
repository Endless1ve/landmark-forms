import closePopupImage from "../images/closePopup.svg";

const correctPhone = "+7 (977) 683 - 37 - 14";
const body = document.querySelector(".body");
const preloader = `<span class="preloader"></span>`;

const popupResultElement = `
<div class="popup resultPopup">
  <div class="popupContent">
    <img src="${closePopupImage}" alt="" class="closePopup">
    <h2 class="popupTitle"></h2>
    <p class="popupText"></p>
  </div>
</div>
`;

const popupFormElement = `
<div class="popup">
  <div class="popupContent">
    <img src="${closePopupImage}" alt="" class="closePopup">
    <h2 class="popupTitle">Связаться с нами</h2>
  </div>
</div>
`;
const popupForms = {
  service: `<form class="form popupForm">
          <div class="inputGroup">
          <input class="formInput popupInput" type="text" placeholder="ИМЯ*" name="your-name" data-required />
          <span class="inputError">Ошибка</span>
        </div>
        <div class="inputGroup">
          <input class="formInput popupInput" type="tel" placeholder="ТЕЛЕФОН" name="your-name" />
          <span class="inputError">Ошибка</span>
        </div>
        <div class="inputGroup">
          <input class="formInput popupInput" type="email" placeholder="EMAIL*" name="your-name" data-required />
          <span class="inputError">Ошибка</span>
        </div>
        <p class="formAcceptance popupAcceptance">
          Нажимая кнопку "Отправить", вы соглашаетесь с
          <strong><a class="acceptanceLink" href="https://landmark-law.ru/users-agreement/">условиями обработки персональных данных</a></strong>
        </p>
        <button class="formSubmit popupSubmit">Отправить</button>
      </form>`,
  career: `<form class="form popupForm">
          <div class="inputGroup">
          <input class="formInput popupInput" type="text" placeholder="ИМЯ*" name="your-name" data-required />
          <span class="inputError">Ошибка</span>
        </div>
        <div class="inputGroup">
          <input class="formInput popupInput" type="tel" placeholder="ТЕЛЕФОН" name="your-name" />
          <span class="inputError">Ошибка</span>
        </div>
        <div class="inputGroup">
          <input class="formInput popupInput" type="email" placeholder="EMAIL*" name="your-name" data-required />
          <span class="inputError">Ошибка</span>
        </div>
        <div class="inputGroup">
          <label class="fileLabel" for="file">Выберите файл</label>
          <input class="file" id="file" type="file" accept=".pdf">
        </div>
        <p class="formAcceptance popupAcceptance">
          Нажимая кнопку "Отправить", вы соглашаетесь с
          <strong><a class="acceptanceLink" href="https://landmark-law.ru/users-agreement/">условиями обработки персональных данных</a></strong>
        </p>
        <button class="formSubmit popupSubmit">Отправить</button>
      </form>`,
};

const validatePatterns = {
  required: "Обязательное поле",
  phone: {
    pattern: "^(\\+7 \\((9\\d{2})\\) \\d{3} - \\d{2} - \\d{2})$",
    message: "Некорректный номер телефона.",
  },
  email: {
    pattern:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    message: "Некорректный email",
  },
};

export {
  body,
  popupFormElement,
  popupResultElement,
  popupForms,
  validatePatterns,
  preloader,
};

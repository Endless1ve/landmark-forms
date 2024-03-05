import closePopupImage from "../images/closePopup.svg";

const body = document.querySelector(".body");
const forms = document.querySelectorAll(".form");
const openPopupButtons = document.querySelectorAll(".openButton");

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
};

export { body, forms, openPopupButtons, popupTemplate, validatePatterns };

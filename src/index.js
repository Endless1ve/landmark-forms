import "./index.css";
import openFormPopup from "./scripts/openFormPopup";
import sendToValidate from "./scripts/sendToValidate";

const forms = document.querySelectorAll(".form");
const openPopupButtons = document.querySelectorAll(".openButton");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", openFormPopup);
});

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendToValidate(form);
  });
});

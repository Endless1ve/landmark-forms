import sendToValidate from "./sendToValidate";
import { popupForms } from "./variables";

export default function renderForm(popupSlot, formName) {
  popupSlot.insertAdjacentHTML("beforeend", popupForms[formName]);

  const popupForm = document.querySelector(".popupForm");

  popupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sendToValidate(popupForm);
  });
}

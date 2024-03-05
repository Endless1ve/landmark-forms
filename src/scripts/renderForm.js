import sendToValidate from "./sendToValidate";
import setFile from "./setFile";
import { popupForms } from "./variables";

export default function renderForm(popupSlot, formName) {
  popupSlot.insertAdjacentHTML("beforeend", popupForms[formName]);

  const popupForm = document.querySelector(".popupForm");
  const fileElem = popupForm.querySelector(".file");

  popupForm.addEventListener("submit", sendToValidate);
  if (fileElem) {
    fileElem.addEventListener("change", setFile);
  }
}

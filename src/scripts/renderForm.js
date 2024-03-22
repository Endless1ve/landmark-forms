import addPhoneStart from "./addPhoneStart";
import deletePhoneStart from "./deletePhoneStart";
import sendToValidate from "./sendToValidate";
import setFile from "./setFile";
import { popupForms } from "./variables";

export default function renderForm(popupSlot, formName) {
  popupSlot.insertAdjacentHTML("beforeend", popupForms[formName]);

  const popupForm = document.querySelector(".popupForm");
  const fileElem = popupForm.querySelector(".fileInput");
  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  popupForm.addEventListener("submit", sendToValidate);

  if (fileElem) {
    fileElem.addEventListener("change", setFile);
  }
  phoneInputs.forEach((phone) => {
    phone.addEventListener("focus", addPhoneStart);
    phone.addEventListener("blur", deletePhoneStart);
  });
}

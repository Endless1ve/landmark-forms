import "./index.css";
import addPhoneStart from "./scripts/addPhoneStart";
import deletePhoneStart from "./scripts/deletePhoneStart";
import openFormPopup from "./scripts/openFormPopup";
import sendToValidate from "./scripts/sendToValidate";
import { forms, openPopupButtons } from "./scripts/variables";

openPopupButtons.forEach((button) => {
  button.addEventListener("click", openFormPopup);
});

forms.forEach((form) => {
  form.addEventListener("submit", sendToValidate);
});

const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach((phone) => {
  phone.addEventListener("focus", addPhoneStart);
  phone.addEventListener("blur", deletePhoneStart);
});

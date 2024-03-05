import "./index.css";
import openFormPopup from "./scripts/openFormPopup";
import sendToValidate from "./scripts/sendToValidate";
import { forms, openPopupButtons } from "./scripts/variables";

openPopupButtons.forEach((button) => {
  button.addEventListener("click", openFormPopup);
});

forms.forEach((form) => {
  form.addEventListener("submit", sendToValidate);
});

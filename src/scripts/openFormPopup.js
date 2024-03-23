import closePopup from "./closePopup";
import renderForm from "./renderForm";
import { body, popupTemplate } from "./variables";

export default function openFormPopup() {
  body.insertAdjacentHTML("beforeend", popupTemplate);

  const popup = document.querySelector(".popup");
  const popupSlot = document.querySelector(".popupContent");
  const formName = event.target.name;

  renderForm(popupSlot, formName);

  popup.addEventListener("mousedown", closePopup);
}

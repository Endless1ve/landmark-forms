import closePopup from "./closePopup";
import renderForm from "./renderForm";
import { body, popupFormElement } from "./variables";

export default function openFormPopup(event) {
  body.insertAdjacentHTML("beforeend", popupFormElement);
  const popup = document.querySelector(".popup");
  const popupSlot = document.querySelector(".popupContent");
  const formName = event.target.name;

  renderForm(popupSlot, formName);

  popup.addEventListener("click", closePopup);
}

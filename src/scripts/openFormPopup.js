import closePopup from "./closePopup";
import { body, popupTemplate } from "./variables";

export default function openFormPopup() {
  body.insertAdjacentHTML("beforeend", popupTemplate);

  const popup = document.querySelector(".popup");

  popup.addEventListener("mousedown", closePopup);
}

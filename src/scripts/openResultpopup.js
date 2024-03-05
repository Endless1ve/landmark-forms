import closePopup from "./closePopup";
import { body, popupResultElement } from "./variables";

export default function openResultPopup(result) {
  body.insertAdjacentHTML("beforeend", popupResultElement);
  const popup = document.querySelector(".resultPopup");
  const popupTitle = popup.querySelector(".popupTitle");
  const popupText = popup.querySelector(".popupText");
  if (result.status !== "mail_sent") {
    popupTitle.textContent = "Ошибка";
  } else popupTitle.textContent = "Успешно";
  if (result.message) {
    popupText.textContent = result.message;
  } else popupText.textContent = result;

  popup.addEventListener("click", closePopup);
}

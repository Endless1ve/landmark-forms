import closePopupImage from "../images/closePopup.svg";

const body = document.querySelector(".body");
const openPopupButtons = document.querySelectorAll(".openButton");

const popupTemplate = `
<div class="popup">
  <div class="popupContent">
    <img src="${closePopupImage}" alt="" class="closePopup">
    <h2 class="popupTitle">Связаться с нами</h2>
  </div>
</div>
`;

export { body, openPopupButtons, popupTemplate };

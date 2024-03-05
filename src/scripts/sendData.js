import { closePopupAfterSubmit } from "./closePopupAfterSubmit";
import openResultPopup from "./openResultpopup";
import removePreloader from "./removePreloader";
import { setPreloader } from "./setPreloader";

const mailSuccess = {
  contact_form_id: 114,
  into: "#",
  invalid_fields: [],
  message: "Обращение успешно отправлено, скоро мы с Вами свяжемся!",
  posted_data_hash: "93901115283422853e6b7af16b06ffd0",
  status: "mail_sent",
};
const mailUnsuccess = {
  contact_form_id: 114,
  into: "#",
  invalid_fields: [],
  message:
    "При отправке сообщения произошла ошибка. Пожалуйста, попробуйте ещё раз позже.",
  posted_data_hash: "1f0c293d350c686cae8301eeb634e8c2",
  status: "mail_failed",
};

function simulateServerRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const successRate = Math.random();
      if (successRate < 0.8) {
        if (successRate < 0.5) {
          resolve(mailSuccess);
        } else resolve(mailUnsuccess);
      } else {
        reject("Cервер недоступен");
      }
    }, 1000);
  });
}

export default function sendData(form) {
  const formButton = form.querySelector(".formSubmit");
  setPreloader(formButton);
  simulateServerRequest()
    .then((response) => {
      form.reset();
      closePopupAfterSubmit();
      openResultPopup(response);
    })
    .catch((error) => {
      openResultPopup(error);
    })
    .finally(() => {
      removePreloader(formButton);
    });
}

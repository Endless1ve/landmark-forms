import checkInputValidity from "./checkInputValidity";
import sendData from "./sendData";

export default function sendToValidate(event) {
  event.preventDefault();
  const form = event.target;
  const elements = [...form.elements];
  let isValid = true;

  elements.forEach((element) => {
    isValid = checkInputValidity(element) && isValid;
  });

  if (isValid) {
    sendData(form);
  } else {
    form.addEventListener("input", () => {
      elements.forEach((element) => {
        isValid = checkInputValidity(element) && isValid;
      });
    });
  }
}

import checkInputValidity from "./checkInputValidity";
import sendData from "./sendData";

export default function sendToValidate(form) {
  const elements = [...form.elements];
  let isValid = true;
  elements.forEach(
    (element) => (isValid = checkInputValidity(element) && isValid)
  );
  if (isValid) {
    sendData(form);
  } else {
    form.addEventListener("input", () => {
      isValid = elements.reduce(
        (acc, elem) => checkInputValidity(elem) && acc,
        true
      );
    });
  }
}

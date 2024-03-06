import changeName from "./changeName";
import checkInputValidity from "./checkInputValidity";

export default function setFile(event) {
  const fileInput = event.target;
  const files = fileInput.files;
  const parentElem = fileInput.parentElement;
  const fileLabel = parentElem.querySelector(".fileLabel");
  const fileClearButton = parentElem.querySelector(".fileButton");

  if (files.length != 0) {
    if (checkInputValidity(fileInput)) {
      changeName(parentElem, fileInput);
    }
  } else {
    fileLabel.textContent = "Выберите файл...";
  }

  fileClearButton.addEventListener("click", () => {
    fileInput.value = null;
    fileLabel.textContent = "Выберите файл...";
  });
}

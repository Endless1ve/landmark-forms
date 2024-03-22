export default function showError(element, error) {
  const parentElem = element.parentElement;
  const errorBlock = parentElem.querySelector(".inputError");
  errorBlock.style.visibility = "visible";
  errorBlock.textContent = error;
}

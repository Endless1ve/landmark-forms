export default function showError(element, error) {
  const parentElem = element.parentElement;
  const errorBlock = parentElem.querySelector(".errorBlock");
  const errorText = errorBlock.querySelector(".errorText");
  errorText.textContent = error;
  errorBlock.style.display = "block";
}

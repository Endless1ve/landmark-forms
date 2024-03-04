export default function showError(element, error) {
  const errorBlock = element.nextElementSibling;
  errorBlock.style.visibility = "visible";
  errorBlock.textContent = error;
}

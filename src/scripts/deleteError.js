export default function deleteError(element) {
  const errorBlock = element.nextElementSibling;
  if (errorBlock) {
    errorBlock.style.visibility = "hidden";
    errorBlock.textContent = "Ошибка";
  }
}

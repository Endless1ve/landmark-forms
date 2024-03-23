export function closePopupAfterSubmit() {
  const popup = document.querySelector(".popup");
  if (popup) {
    popup.remove();
  }
}

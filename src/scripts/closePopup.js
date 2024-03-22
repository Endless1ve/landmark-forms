export default function closePopup({ currentTarget, target }) {
  const isBackgroundClick = currentTarget === target;
  if (isBackgroundClick || target.classList.contains("closePopup")) {
    currentTarget.remove();
  }
}

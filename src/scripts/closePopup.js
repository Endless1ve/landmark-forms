export default function closePopup({ currentTarget, target }) {
  event.stopPropagation();
  console.log(event.target);
  const isBackgroundClick = currentTarget === target;
  if (isBackgroundClick || target.classList.contains("closePopup")) {
    currentTarget.remove();
  }
}

export default function deleteError(element) {
  const parentElem = element.parentElement;
  const errorBlock = parentElem.querySelector(".errorBlock");
  errorBlock.style.display = "none";
}

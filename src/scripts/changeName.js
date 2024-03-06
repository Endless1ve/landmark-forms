export default function changeName(parentElem, inputElem) {
  const fileLabel = parentElem.querySelector(".fileLabel");
  let fileValue = inputElem.files[0].name;
  let name = fileValue.slice(0, -4);
  const resolution = fileValue.slice(-4);
  if (name.length > 20) {
    name = name.slice(0, 20) + "...";
    fileValue = name + resolution;
  }
  fileLabel.textContent = fileValue;
}

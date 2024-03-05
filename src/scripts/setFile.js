export default function setFile() {
  const fileInput = document.querySelector(".file");
  const fileLabel = document.querySelector(".fileLabel");
  const fileClearButton = document.querySelector(".fileButton");
  const files = event.target.files;

  if (files.length > 0) {
    let fileName = event.target.files[0].name;
    let name = fileName.slice(0, -4);
    const resolution = fileName.slice(-4);

    if (name.length > 20) {
      name = name.slice(0, 20) + "...";
      fileName = name + resolution;
    }
    fileLabel.textContent = fileName;
  } else {
    fileLabel.textContent = "Выберите файл...";
  }

  fileClearButton.addEventListener("click", () => {
    fileInput.value = null;
    fileLabel.textContent = "Выберите файл...";
  });
}

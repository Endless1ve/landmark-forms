import removePreloader from "./removePreloader";
import { setPreloader } from "./setPreloader";

export default function sendData(form) {
  const formButton = form.querySelector(".formSubmit");

  setPreloader(formButton);
  setTimeout(() => removePreloader(formButton), 2000);
}

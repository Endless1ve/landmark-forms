import "./index.css";
import openFormPopup from "./scripts/openFormPopup";
import { openPopupButtons } from "./scripts/variables";

openPopupButtons.forEach((button) => {
  button.addEventListener("click", openFormPopup);
});

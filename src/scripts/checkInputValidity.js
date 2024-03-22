import deleteError from "./deleteError";
import showError from "./showError";
import { validatePatterns } from "./variables";

export default function checkInputValidity(element) {
  if (element.tagName !== "INPUT" && element.tagName !== "TEXTAREA") {
    return true;
  }
  if (element.hasAttribute("data-required") && element.value.length === 0) {
    showError(element, validatePatterns.required);
    return false;
  }
  if (!element.hasAttribute("data-required") && element.value.length === 0) {
    deleteError(element);
    return true;
  }
  if (
    element.type === "tel" &&
    !(element.value.startsWith("+7") || element.value.startsWith("8"))
  ) {
    showError(element, validatePatterns.phone.message);
    return false;
  }
  if (element.type === "tel" && element.value.startsWith("+7")) {
    if (element.value.length != 12) {
      showError(element, validatePatterns.phone.message);
      return false;
    }
  }
  if (element.type === "tel" && element.value.startsWith("8")) {
    if (element.value.length != 11) {
      showError(element, validatePatterns.phone.message);
      return false;
    }
  }
  if (
    element.type === "email" &&
    !RegExp(validatePatterns.email.pattern).test(element.value)
  ) {
    showError(element, validatePatterns.email.message);
    return false;
  }
  if (element.type === "file" && !element.value.includes(".pdf")) {
    showError(element, validatePatterns.file.message);
    element.value = null;
    return false;
  }
  deleteError(element);
  return true;
}

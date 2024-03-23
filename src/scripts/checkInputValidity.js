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
  if (
    element.name === "your-name" &&
    !RegExp(validatePatterns.name.pattern).test(element.value)
  ) {
    showError(element, validatePatterns.name.message);
    return false;
  }
  if (element.type === "tel" && element.value.startsWith("+7")) {
    element.setAttribute("maxLength", 12);
    if (!RegExp(validatePatterns.phone.plusPattern).test(element.value)) {
      showError(element, validatePatterns.phone.message);
      return false;
    }
  }
  if (element.type === "tel" && element.value.startsWith("8")) {
    element.setAttribute("maxLength", 11);
    if (!RegExp(validatePatterns.phone.pattern).test(element.value)) {
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

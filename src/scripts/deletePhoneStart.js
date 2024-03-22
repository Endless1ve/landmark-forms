export default function deletePhoneStart(event) {
  if (event.target.value.length < 3) event.target.value = "";
}

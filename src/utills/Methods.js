import { showMessage } from "react-native-flash-message";
export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
export function successMessage(description = "", duration = 1000) {
  showMessage({
    message: "Success",
    description: description,
    type: "success",
    duration: duration,
  });
}
export function erroMessage(description = "", duration = 2000) {
  showMessage({
    message: "Error",
    description: description,
    type: "danger",
    duration: duration,
  });
}

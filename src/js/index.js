import "../scss/style.scss";
import "../../src/js/swiper.js";
import "../../src/js/readmore.js";

const popupWindowBlur = document.getElementById("popupWindowBlur");
const closeMenu = document.getElementById("closeMenu");
const feedback = document.getElementById("feedback");
const header = document.getElementById("header");
const submit = document.getElementById("submit");
const feedBackNumber = document.getElementById("feedBackNumber");
const inputName = document.getElementById("inputName");
const inputNumber = document.getElementById("inputNumber");

let menuName = "";
let className = "";
let i = -1;

const popUpWindowSwipe = (e) => {
  closePopUpWindow();
  if (e.target.closest("#ButtonMenu") || e.target.closest("#closeMenu")) {
    menuName = popUpWindow;
    className = "popup-window_invisible";
  } else if (
    e.target.closest("#submitData") ||
    (e.target.closest(".popup-window_feedback__button") &&
      !feedBackNumber.classList.contains("invisible-feedback")) ||
    e.target.closest("#submitDataHeader")
  ) {
    menuName = feedBackNumber;
    className = "invisible-feedback";
    inputNumber.hasAttribute("autofocus", " ")
      ? inputNumber.removeAttribute("autofocus", " ")
      : inputNumber.setAttribute("autofocus", " ");
  } else if (
    e.target.closest("#submitNumber") ||
    e.target.closest("#closeMenuNumber") ||
    e.target.closest("#submitNumberHeader")
  ) {
    menuName = feedback;
    className = "invisible-feedback";
    inputName.hasAttribute("autofocus", " ")
      ? inputName.removeAttribute("autofocus", " ")
      : inputName.setAttribute("autofocus", " ");
  } else return;
  document.body.classList.toggle("scroll");
  menuName.classList.toggle(className);
  popupWindowBlur.classList.toggle("blured");
  closePopUpWindow();
  if (!(className == '') && i > 0) {
    document.body.classList.toggle("scroll");
    menuName.classList.toggle(className);
    popupWindowBlur.classList.toggle("blured");
  }
};

const closePopUpWindow = () => {
  i = -1;
  className = "";
  menuName = "";
  if (!feedback.classList.contains("invisible-feedback")) {
    className = "invisible-feedback";
    menuName = feedback;
    ++i;
  } if (!feedBackNumber.classList.contains("invisible-feedback")) {
    className = "invisible-feedback";
    menuName = feedBackNumber;
    ++i;
  } if (!popUpWindow.classList.contains("popup-window_invisible")) {
    className = "popup-window_invisible";
    menuName = popUpWindow;
    ++i;
  } else return;
};

const onclosePopUpWindow = (e) => {
  if (e.type == "click" || e.code == "Escape") {
    closePopUpWindow();
    if (className == "") {
      return;
    } else {
      document.body.classList.toggle("scroll");
      menuName.classList.toggle(className);
      popupWindowBlur.classList.toggle("blured");
    }
  } else return;
};

closeMenu.addEventListener("click", popUpWindowSwipe);
feedback.addEventListener("click", popUpWindowSwipe);
feedBackNumber.addEventListener("click", popUpWindowSwipe);
header.addEventListener("click", popUpWindowSwipe);
submit.addEventListener("click", popUpWindowSwipe);
popupWindowBlur.addEventListener("click", onclosePopUpWindow);
document.addEventListener("keydown", onclosePopUpWindow);
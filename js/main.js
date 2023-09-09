// Modal
const modalWrapper = document.querySelector(".form-modal-wrapper");
const modalContent = document.querySelector(".form-modal-content");
const modalForm = document.querySelector(".modal-form");
const successModal = document.querySelector(".success-modal");

const modalCross = document.querySelectorAll(".modal-cross");

const modalActionButtons = document.querySelectorAll(".modal-action-button");
const formSubmitButtons = document.querySelectorAll(".form-submit-button");

function modalVisibilityHandler() {
  //   modalContent.classList.remove("hidden");
  modalWrapper.classList.toggle("visible");
  successModal.classList.remove("visible");
}

if (modalActionButtons) {
  modalActionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modalVisibilityHandler();
      modalContent.classList.remove("hidden");
    });
  });
}

if (modalCross) {
  modalCross.forEach((cross) => {
    cross.addEventListener("click", () => {
      modalVisibilityHandler();
    });
  });
}

if (modalContent) {
  document.addEventListener("click", (e) => {
    if (e.target === modalWrapper) {
      modalVisibilityHandler();
    }
  });
}

function showSuccessMessage(e) {
  e.preventDefault();
  modalContent.classList.add("hidden");
  modalWrapper.classList.add("visible");
  successModal.classList.add("visible");
}

if (formSubmitButtons) {
  formSubmitButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      showSuccessMessage(e);
    });
  });
}

// Scroll To Buttons
const aboutUsButton = document.querySelectorAll(".about-us-button");
const approachButton = document.querySelectorAll(".approach-button");
const casesButton = document.querySelectorAll(".cases-button");
const servicesButton = document.querySelectorAll(".services-button");

// Scroll To Blocks
const aboutUsBlock = document.querySelector(".header");
const approachBlock = document.querySelector(".about-us-block");
const casesBlock = document.querySelector(".team-block");
const servicesBlock = document.querySelector(".resume-block");

// Scroll To Handler
function scrollingToBlock(btn, block) {
  btn.forEach((e) => {
    e.addEventListener("click", () => {
      block.scrollIntoView({ block: "center", behavior: "smooth" });
      document.body.classList.remove("lock");
      iconMenu.classList.remove("activem");
      menuBody.classList.remove("activem");
    });
  });
}
// ScrollTo listeners

scrollingToBlock(aboutUsButton, aboutUsBlock);
scrollingToBlock(approachButton, approachBlock);
scrollingToBlock(casesButton, casesBlock);
scrollingToBlock(servicesButton, servicesBlock);

// custom select

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      console.log("select choosed");
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

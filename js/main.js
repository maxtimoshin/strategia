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

let btnOpen = document.querySelector(".open__modal-btn");
let modal = document.querySelector(".modal");
let iconClose = document.getElementById(".fa-solid fa-xmark");
let btnClose = document.getElementById(".btn__footer");

function toggleModal(e) {
  console.log("aaaa");
  modal.classList.toggle("hide");
}

btnOpen.addEventListener("click", toggleModal);
modal.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
btnClose.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});

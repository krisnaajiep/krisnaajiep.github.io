const menuIcon = document.querySelector(".menu-icon");
const overlay = document.querySelector(".overlay");
menuIcon.addEventListener("click", function () {
  this.classList.toggle("change");
  overlay.classList.toggle("show");
});

const menuOverlay = document.querySelectorAll(".overlay a");
menuOverlay.forEach((element) => {
  element.addEventListener("click", function () {
    menuIcon.classList.remove("change");
    overlay.classList.remove("show");
  });
});

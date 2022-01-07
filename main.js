const hamburger = document.querySelector("#jsHamburger");
const header = document.querySelector("#jsFashionHeader");
const mobileMenu = document.querySelector("#jsMobileMenu");
hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  header.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

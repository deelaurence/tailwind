let hamburger = document.querySelector(".hamburger-cont");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let container = document.querySelector(".hamburger-cont");
let mobileToggle = document.querySelector(".mobile-toggle");

hamburger.addEventListener("click", () => {
  line2.classList.toggle("hide-line");
  line1.classList.toggle("clockwise");
  line3.classList.toggle("aclockwise");
  container.classList.toggle("cont-bg");
  mobileToggle.classList.toggle("show-line");
});

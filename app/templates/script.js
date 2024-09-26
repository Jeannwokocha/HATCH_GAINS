"use strict";

const overlay = document.querySelector(".overlay");
const showDropdown = document.querySelector(".show");
const hideDropdown = document.querySelector(".hide");
const dropdown = document.querySelector(".dropdown");
const logo = document.querySelector(".logo");
// const signInBtn = document.querySelector("#signLink");
// const signIcon = document.querySelector(".hero-sign");

showDropdown.addEventListener("click", () => {
  overlay.style.display = "block";
  showDropdown.style.display = "none";
  hideDropdown.style.display = "inline-block";
  dropdown.style.marginLeft = "0";
  logo.classList.add("pop");
});
hideDropdown.addEventListener("click", () => {
  overlay.style.display = "none";
  showDropdown.style.display = "inline-block";
  hideDropdown.style.display = "none";
  dropdown.style.marginLeft = "-60%";
  logo.classList.remove("pop");
});

// signInBtn.addEventListener("mouseenter", () => {
//   signIcon.style.display = "inline";
// });
// signInBtn.addEventListener("mouseleave", () => {
//   signIcon.style.display = "block";
// });

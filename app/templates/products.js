"use strict";
document.querySelectorAll(".cart").forEach((cart) => {
  cart.addEventListener("click", () => {
    alert("Added to cart!");
  });
});

document.querySelectorAll(".heart").forEach((heart) => {
  heart.addEventListener("click", () => {
    alert("Added to favorites!");
  });
});

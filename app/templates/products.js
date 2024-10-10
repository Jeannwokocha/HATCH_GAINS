"use strict";

// Function to handle quantity changes for products
function changeQuantity(product, change) {
  // Find the quantity span element for the given product by its ID
  const quantitySpan = document.getElementById(`${product}-quantity`);

  // Parse the current quantity from the text content of the span
  let currentQuantity = parseInt(quantitySpan.textContent);

  // Calculate the new quantity by applying the change (increase/decrease)
  let newQuantity = currentQuantity + change;

  // Prevent the quantity from going below 1
  if (newQuantity < 1) {
    newQuantity = 1;
  }

  // Update the span's text content to reflect the new quantity
  quantitySpan.textContent = newQuantity;
}

// Add event listeners for navigation buttons like Login, Sign Up
document.querySelector(".login-btn").addEventListener("click", function () {
  // Add your login functionality here
  alert("Login functionality goes here!");
});

document.querySelector(".signup-btn").addEventListener("click", function () {
  // Add your signup functionality here
  alert("Sign up functionality goes here!");
});

// Example: Future cart handling (you can modify this as needed)
document.querySelectorAll(".price").forEach((button) => {
  button.addEventListener("click", function () {
    // Example: alert for the clicked product (can be extended to add to cart functionality)
    const productName = this.parentElement.querySelector("h3").textContent;
    alert(`Added ${productName} to the cart!`);
  });
});

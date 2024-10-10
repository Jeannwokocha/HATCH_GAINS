"use strict";
function changeQuantity(product, change) {
  const quantityElement = document.getElementById(`${product}-quantity`);
  let currentQuantity = parseInt(quantityElement.textContent);

  // Ensure quantity doesn't go below 1
  if (currentQuantity + change >= 1) {
    quantityElement.textContent = currentQuantity + change;
  }
}

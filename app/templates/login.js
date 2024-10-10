"use strict";

// Handle the login form submission
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple validation (you can extend this further)
  if (email && password) {
    alert(`Login successful! Email: ${email}`);
  } else {
    alert("Please enter your email and password.");
  }
});

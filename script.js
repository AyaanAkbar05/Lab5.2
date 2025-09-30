const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


window.addEventListener("load", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    username.value = savedUsername;
  }
});


username.addEventListener("input", () => {
  if (username.validity.valueMissing) {
    usernameError.textContent = "Username is required.";
  } else if (username.validity.tooShort) {
    usernameError.textContent = "Username must be at least 3 characters.";
  } else {
    usernameError.textContent = "";
  }
});


email.addEventListener("input", () => {
  if (email.validity.valueMissing) {
    emailError.textContent = "Email is required.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email.";
  } else {
    emailError.textContent = "";
  }
});


password.addEventListener("input", () => {
  if (password.validity.valueMissing) {
    passwordError.textContent = "Password is required.";
  } else if (password.validity.patternMismatch) {
    passwordError.textContent = "Password does not meet requirements.";
  } else {
    passwordError.textContent = "";
  }
});


confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
  } else {
    confirmPasswordError.textContent = "";
  }
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

 
  username.dispatchEvent(new Event("input"));
  email.dispatchEvent(new Event("input"));
  password.dispatchEvent(new Event("input"));
  confirmPassword.dispatchEvent(new Event("input"));

  if (
    !usernameError.textContent &&
    !emailError.textContent &&
    !passwordError.textContent &&
    !confirmPasswordError.textContent
  ) {
    alert("Registration successful!");
    localStorage.setItem("username", username.value);
    form.reset();
  } else {

    if (usernameError.textContent) username.focus();
    else if (emailError.textContent) email.focus();
    else if (passwordError.textContent) password.focus();
    else if (confirmPasswordError.textContent) confirmPassword.focus();
  }
});

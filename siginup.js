function checkAge() {
    let age = prompt("Please enter your age:");
    if (age >= 18) {
        alert("You are eligible to sign up.");
    } else {
        alert("You must be at least 18 years old to sign up.");
    }
}
document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let emailField = document.getElementById("em");

  if (form && emailField) {
    form.addEventListener("submit", function (e) {
      let emailInput = emailField.value.trim();

      if (emailInput === "") {
        alert("Please enter your email before submitting.");
        e.preventDefault();
        return;
      }
    });
  }
});
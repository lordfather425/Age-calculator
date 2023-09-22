document.addEventListener("DOMContentLoaded", function () {
  const birthdateInput = document.getElementById("birthdate");
  const calculateButton = document.getElementById("calculateButton");
  const resultDiv = document.getElementById("result");
  const yearsSpan = document.getElementById("years");
  const monthsSpan = document.getElementById("months");
  const daysSpan = document.getElementById("days");
  const errorDiv = document.getElementById("error");
  const errorText = document.getElementById("errorText");

  calculateButton.addEventListener("click", function () {
    errorDiv.style.display = "none";
    resultDiv.style.display = "none";

    if (!birthdateInput.value) {
      showError("Please enter a valid birthdate.");
      return;
    }

    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    if (birthdate > currentDate) {
      showError("Please enter a birthdate in the past.");
      return;
    }

    const ageInMilliseconds = currentDate - birthdate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    yearsSpan.textContent = years;
    monthsSpan.textContent = months;
    daysSpan.textContent = days;
    resultDiv.style.display = "block";
  });

  function showError(errorMessage) {
    errorText.textContent = errorMessage;
    errorDiv.style.display = "block";
  }
});

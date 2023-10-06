document.addEventListener("DOMContentLoaded", function() {
  const principalInput = document.getElementById("principal");
  const interestInput = document.getElementById("interest");
  const yearsInput = document.getElementById("years");
  const calculateButton = document.getElementById("calculate");
  const resultText = document.getElementById("result-text");

  calculateButton.addEventListener("click", function() {
      const principal = parseFloat(principalInput.value);
      const interestRate = parseFloat(interestInput.value) / 100;
      const years = parseFloat(yearsInput.value);

      const amount = principal * Math.pow(1 + interestRate, years);
      resultText.textContent = `$${amount.toFixed(2)}`;
      
  });
});

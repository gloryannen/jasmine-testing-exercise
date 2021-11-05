window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  // Put some default values in the inputs
  let val = {
    amount: 1000,
    years: 5,
    rate: 1.5,
  }
  // Get the inputs from the DOM.
  let loanAmount = document.getElementById("loan-amount");
  let yearAmount = document.getElementById("loan-years");
  let rateAmount = document.getElementById("loan-rate");
  // Call a function to calculate the current monthly payment
  loanAmount.value = val.amount;
  yearAmount.value = val.years;
  rateAmount.value = val.rate;
  
  update();
}

function update() {
  // Get the current values from the UI
  let currentUIVal = getCurrentUIValues();
  // Update the monthly payment
  updateMonthly(calculateMonthlyPayment(currentUIVal));
}

function calculateMonthlyPayment(val) {
  // monthly payment=(P×i) / (1−(1+i)−n)
  // P = Amount of principle
  // i = periodic interest rate (in our case yearly rate ÷ 12)
  // n = total number of payments (years × 12)

  // Given an object of values (a value has amount, years and rate ), calculate the monthly payment. The output should be a string that always has 2 decimal places.
  let monthlyPay = (val.rate / 100) / 12;
  let pxi = (val.amount * monthlyPay);
  let n = (val.years * 12);

  return ((pxi) / (1 - Math.pow((1 + monthlyPay), -n)))
  .toFixed(2);
}

function updateMonthly(monthly) {
  // Given a string representing the monthly payment value,
  let monthlyPayVal = document.getElementById("monthly-payment");
  // update the UI to show the value.
  monthlyPayVal.innerHTML = " " + monthly;
}

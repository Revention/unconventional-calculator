// Javascript application for calculating values from the unconventional calculator webpage
// NOTE: This script is under development and might not work as expected

// Declarations
const defaultResult = 0;
let currentResult = defaultResult;
let calculatorDescription = `( ${defaultResult} )`;

// Main

addBtn.addEventListener("click", calculator);

// Functions

// function for adding the user input value to the currentresult
function addNumber(val1, val2) {
  calculatorDescription = `${val1} + ${val2}`;
  currentResult = val1 + val2;

  return currentResult, calculatorDescription;
}

// function for starting calculations and checking input values
function calculator() {
  addNumber(currentResult, Number(usrInput.value));
  outputResult(currentResult, calculatorDescription);
}

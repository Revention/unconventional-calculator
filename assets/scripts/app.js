// Javascript application for calculating values from the unconventional calculator webpage
// NOTE: This script is under development and might not work as expected

// Declarations
const defaultResult = 0;
let currentResult = defaultResult;
let calculatorDescription = `( ${defaultResult} )`;

// Main
addBtn.addEventListener("click", addOperator);
subtractBtn.addEventListener("click", substractOperator);
multiplyBtn.addEventListener("click", multiplyOperator);
divideBtn.addEventListener("click", divideOperator);

// Functions
function addOperator() {
  const button = addBtn;
  operatorSelect(button);
}

function substractOperator() {
  const button = subtractBtn;
  operatorSelect(button);
}

function multiplyOperator() {
  const button = multiplyBtn;
  operatorSelect(button);
}

function divideOperator() {
  const button = divideBtn;
  operatorSelect(button);
}

// operator selection based on html-button pressed (index.html vendor.js)
function operatorSelect(button) {
  operator = button.innerText;
  console.log(`operator.operatorSelect is ${operator}`);
  calculator(operator);
}

// get the userinput value from html field through vendor.js
function getUserInputValue() {
  const number = parseInt(usrInput.value);
  return number;
}

// calculations router
function calculator(operator) {
  const num = getUserInputValue();
  calculation(operator, currentResult, num);
  outputResult(currentResult, calculatorDescription);
}

// preform calculation based on userinputvalue and operator
function calculation(opr, val1, val2) {
  calculatorDescription = `${val1} ${opr} ${val2}`;

  switch (opr) {
    case "+":
      currentResult = val1 + val2;
      break;
    case "-":
      currentResult = val1 - val2;
      break;
    case "*":
      currentResult = val1 * val2;
      break;
    case "/":
      currentResult = val1 / val2;
      break;
    default:
      console.log("selection failed");
  }

  return currentResult, calculatorDescription;
}

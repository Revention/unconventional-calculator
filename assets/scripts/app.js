// Javascript application for calculating values from the unconventional calculator webpage
// NOTE: This script is under development and might not work as expected

// Declarations
const defaultResult = 0;
let currentResult = defaultResult;
let calculatorDescription = `( ${defaultResult} )`;
let logEntries = [];
let logOperators = [];

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
  calculator(operator);
}

// get the userinput value from html field through vendor.js
function getUserInputValue() {
  const number = parseInt(usrInput.value);
  return number;
}

function logHistory(operatorWord, initialResult, operator, num, currentResult) {
  const logEntry = {
    logOperatorWord: operatorWord,
    logInitialResult: initialResult,
    logOperator: operator,
    logNumber: num,
    logNewResult: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

// calculations router
function calculator(operator) {
  const num = getUserInputValue();
  calculation(operator, currentResult, num);
  outputResult(currentResult, calculatorDescription);
  logHistory(operatorWord, initialResult, operator, num, currentResult);
}

// preform calculation based on userinputvalue and operator
function calculation(opr, val1, val2) {
  calculatorDescription = `${val1} ${opr} ${val2}`;

  switch (opr) {
    case "+":
      initialResult = currentResult;
      currentResult = val1 + val2;
      operatorWord = "ADD";
      break;
    case "-":
      initialResult = currentResult;
      currentResult = val1 - val2;
      operatorWord = "SUBSTRACT";
      break;
    case "*":
      initialResult = currentResult;
      currentResult = val1 * val2;
      operatorWord = "MULTIPLY";
      break;
    case "/":
      initialResult = currentResult;
      currentResult = val1 / val2;
      operatorWord = "DIVIDE";
      break;
    default:
      console.log("ERROR: selection failed");
  }

  return currentResult, calculatorDescription;
}

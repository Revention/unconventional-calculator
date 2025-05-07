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

// function for getting the userinput value
function getUserInputValue() {
  const number = parseInt(usrInput.value);
  return number;
}

// function for selectiong operation based on button
function operatorSelect() {
  const operator = addBtn.value;
  return operator;
}

function addOperator() {
  operator = "+";
  console.log("Operator for adding selected", operator);
  calculator();
}

function substractOperator() {
  operator = "-";
  console.log("Operator for substracting selected", operator);
  calculator();
}

function multiplyOperator() {
  operator = "*";
  console.log("Operator for mulitplication selected", operator);
  calculator();
}

function divideOperator() {
  operator = "/";
  console.log("Operator for division selected", operator);
  calculator();
}
// function for adding the user input value to the currentresult
function calculation(opr, val1, val2) {
  calculatorDescription = `${val1} ${opr} ${val2}`;

  switch (opr) {
    case "+":
      currentResult = val1 + val2;
      console.log("switch add");
      break;
    case "-":
      currentResult = val1 - val2;
      console.log("switch substract");
      break;
    case "*":
      currentResult = val1 * val2;
      console.log("switch multiply");
      break;
    case "/":
      currentResult = val1 / val2;
      console.log("switch divide");
      break;
    default:
      console.log("selection failed");
  }

  return currentResult, calculatorDescription;
}

// function for starting calculations and converting input values
function calculator() {
  const num = getUserInputValue();
  const opr = operator;
  console.log(opr, currentResult, num);
  calculation(opr, currentResult, num);
  outputResult(currentResult, calculatorDescription);
}

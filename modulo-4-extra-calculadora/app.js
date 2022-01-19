const add = (operand1, operand2) => operand1 + operand2;
const substract = (operand1, operand2) => operand1 - operand2;
const multiply = (operand1, operand2) => operand1 * operand2;
const divide = (operand1, operand2) => operand1 / operand2;

let inputValue;
let accumulator = 0;
let lastOperationSelected;

document.getElementById("input-value").value = 0;

const handleOperationButtonClick = event => {
  let result;
  inputValue = parseInt(document.getElementById("input-value").value);

  if (lastOperationSelected === "equals") {
    document.getElementById("result").innerHTML = "";
    result = inputValue;
  }

  if (!lastOperationSelected) {
    result = inputValue;
  }

  switch (lastOperationSelected) {
    case "add": 
      result = add(accumulator, inputValue);
      break;
    case "substract": 
      result = substract(accumulator, inputValue);
      break;
    case "multiply":
      result = multiply(accumulator, inputValue);
      break;
    case "divide":
      result = divide(accumulator, inputValue);
      break;
  }
  
  accumulator = result;
  document.getElementById("input-value").value = result;
  lastOperationSelected = event.target.id;
}

const handleEqualsButtonClick = () => {

  inputValue = parseInt(document.getElementById("input-value").value);
  let result;

  switch (lastOperationSelected) {
    case "add": 
      result = add(accumulator, inputValue);
      break;
    case "substract": 
      result = substract(accumulator, inputValue);
      break;
    case "multiply": 
      result = multiply(accumulator, inputValue);
      break;
    case "divide": 
      result = divide(accumulator, inputValue);
      break;
  }

  lastOperationSelected = "equals";

  document.getElementById("result").innerHTML = "Resultado: " + result;

  accumulator = 0;
  document.getElementById("input-value").value = 0;
}

document.getElementById("add").addEventListener("click", handleOperationButtonClick);
document.getElementById("substract").addEventListener("click", handleOperationButtonClick);
document.getElementById("multiply").addEventListener("click", handleOperationButtonClick);
document.getElementById("divide").addEventListener("click", handleOperationButtonClick);
document.getElementById("equals").addEventListener("click", handleEqualsButtonClick);

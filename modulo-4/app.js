let operand1;
let operand2;

//operations functions

const add = (operand1, operand2) => operand1 + operand2;
const substract = (operand1, operand2) => operand1 - operand2;
const multiply = (operand1, operand2) => operand1 * operand2;
const divide = (operand1, operand2) => operand1 / operand2;

//Get values from inputs

handleInputValue = event => event.target.id === "operand1" ? (operand1 = parseInt(event.target.value)) : (operand2 = parseInt(event.target.value));

document.getElementById("operand1").addEventListener('keyup', handleInputValue);
document.getElementById("operand2").addEventListener('keyup', handleInputValue);

//Check if result is right or wrong
//Creo que me dejo casos como qué pasa si divido 0/0, pero no sé si debo contemplarlos

const checkResult = result => (isNaN(result)) ? ("¡Error! Debes introducir un valor en cada campo") : ("Resultado: " + result);

//Execute operations depending on buttons and get result

handleGetResult = event => {
  let result;

  switch (event.target.id) {
    case "add": 
      result = add(operand1, operand2);
      break;
    case "substract": 
      result = substract(operand1, operand2);
      break;
    case "multiply": 
      result = multiply(operand1, operand2);
      break;
    case "divide": 
      result = divide(operand1, operand2);
      break;
  }

  document.getElementById("result").innerHTML = checkResult(result);
}

document.getElementById("add").addEventListener("click", handleGetResult);
document.getElementById("substract").addEventListener("click", handleGetResult);
document.getElementById("multiply").addEventListener("click", handleGetResult);
document.getElementById("divide").addEventListener("click", handleGetResult);
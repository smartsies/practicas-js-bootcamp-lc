//Caja inicial
const NOTES_AND_COINS = [
  {
    value: 200,
    quantity: 1
  },
  {
    value: 100,
    quantity: 3
  },
  {
    value: 50,
    quantity: 2
  },
  {
    value: 20,
    quantity: 12
  },
  {
    value: 10,
    quantity: 33
  },
  {
    value: 5,
    quantity: 30
  },
  {
    value: 2,
    quantity: 20
  },
  {
    value: 1,
    quantity: 2
  },
  {
    value: 0.50,
    quantity: 25
  },
  {
    value: 0.20,
    quantity: 25
  },
  {
    value: 0.10,
    quantity: 25
  },
  {
    value: 0.05,
    quantity: 25
  },
  {
    value: 0.02,
    quantity: 25
  },
  {
    value: 0.01,
    quantity: 25
  },
]

//Cálculo de la cantidad de dinero a devolver
function getChangeAmount() {
  const total = parseFloat(document.getElementById("total").value);
  const incoming = parseFloat(document.getElementById("incoming").value);
  return incoming - total;
}

//Cálculo de la cantidad de monedas y billetes a devolver en función de lo que haya disponible en la caja
function breakChangeDown(amount) {
  let brokenDownChange = {};
  let rest = amount;
  let index = 0;

  for (index = 0; index < NOTES_AND_COINS.length; index++) {
    //numberOfNotesOrCoins es el número de billetes o monedas que necesitamos devolver del valor que estamos comprobando
    const numberOfNotesOrCoins = Math.floor(rest / NOTES_AND_COINS[index].value);
    //Condición: si hay suficientes billetes o monedas del valor que estamos comprobando en la caja
    //cogemos los que necesitamos y los quitamos de la caja
    if (numberOfNotesOrCoins <= NOTES_AND_COINS[index].quantity) {
      brokenDownChange[NOTES_AND_COINS[index].value] = numberOfNotesOrCoins;
      rest = (rest - (numberOfNotesOrCoins * NOTES_AND_COINS[index].value)).toPrecision(5);
      NOTES_AND_COINS[index].quantity = NOTES_AND_COINS[index].quantity - numberOfNotesOrCoins;
    //Condición: Si hay menos billetes o monedas del valor que estamos comprobando en la caja
    //solo usamos los que haya disponibles y los quitamos de la caja
    } else if (numberOfNotesOrCoins > NOTES_AND_COINS[index].quantity && NOTES_AND_COINS[index].quantity > 0) {
      brokenDownChange[NOTES_AND_COINS[index].value] = NOTES_AND_COINS[index].quantity;
      rest = (rest - (NOTES_AND_COINS[index].quantity * NOTES_AND_COINS[index].value)).toPrecision(5);
      NOTES_AND_COINS[index].quantity = NOTES_AND_COINS[index].quantity - NOTES_AND_COINS[index].quantity;
    }
  }

  return brokenDownChange;
}

function printChange(brokenDownChange) {
  for (let element in brokenDownChange) {
    if (brokenDownChange[element] !== 0) {
      const node = document.createElement("p");
      document.getElementById("change").appendChild(node);

      if (element >= 5) {
        node.innerText = "Billetes de " + element + " euros: " + brokenDownChange[element];
      }  else if (element < 5) {
        node.innerText = "Monedas de " + element + " euros: " + brokenDownChange[element];
      }
    } 
  }
}

function removePreviousResults() {
  document.getElementById("change").innerText = "";
}

function handleButtonClick() {
  removePreviousResults();
  const changeAmount = getChangeAmount();
  const brokenDownChange = breakChangeDown(changeAmount);
  printChange(brokenDownChange);
}

document.getElementById("button").addEventListener("click", handleButtonClick);
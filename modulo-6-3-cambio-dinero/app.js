const NOTES_AND_COINS = [
  200,
  100,
  50,
  20,
  10,
  5,
  2,
  1,
  0.50,
  0.20,
  0.10,
  0.05,
  0.02,
  0.01
]

function getChangeAmount() {
  const total = parseFloat(document.getElementById("total").value);
  const incoming = parseFloat(document.getElementById("incoming").value);
  return incoming - total;
}

function breakChangeDown(amount) {
  let brokenDownChange = {};
  let rest = amount;

  for (i = 0; i < NOTES_AND_COINS.length; i++) {
    const numberOfNotesOrCoins = Math.floor(rest / NOTES_AND_COINS[i]);
    brokenDownChange[NOTES_AND_COINS[i]] = numberOfNotesOrCoins;
    rest = (rest - (numberOfNotesOrCoins * NOTES_AND_COINS[i])).toPrecision(4);
  }

  return brokenDownChange;
}

function printChange(brokenDownChange) {
  for (element in brokenDownChange) {
    if (brokenDownChange[element] !== 0) {
      const node = document.createElement("p");
      document.getElementById("change").appendChild(node);

      if (element >= 5) {
        node.innerText = "Billetes de " + element + " euros: " + brokenDownChange[element];
      } else {
        node.innerText = "Monedas de " + element + " euros: " + brokenDownChange[element];
      }
    }
  }
}

function handleButtonClick() {
  const changeAmount = getChangeAmount();
  const brokenDownChange = breakChangeDown(changeAmount);
  printChange(brokenDownChange);
}

document.getElementById("button").addEventListener("click", handleButtonClick);
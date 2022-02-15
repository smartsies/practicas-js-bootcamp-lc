function checkIfNumberIsRepeated(newNumber, numbersList) {
  for (number of numbersList) {
    if (number === newNumber) return true;
  }
}

function randomPick(n, min, max) {
  let pickedNumbers = [];
  const range = max - min + 1;

  do {
    let numberToStore = Math.floor(Math.random() * range) + min;
    let isNumberRepeated = checkIfNumberIsRepeated(numberToStore, pickedNumbers);
    if (!isNumberRepeated) {
      pickedNumbers.push(numberToStore);
    }
  } while (pickedNumbers.length < n);

  return pickedNumbers;
}

const pickedNumbers = randomPick(5, 0, 10);

console.log(pickedNumbers);
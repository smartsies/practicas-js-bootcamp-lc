function getRoomType() {
  return document.getElementById("room-type").value;
}

function getSpaUse() {
  return document.getElementById("spa-selected").checked;
}

function getRoomSize() {
  return document.getElementById("room-size").value;
}

function getRoomNights() {
  return parseInt(document.getElementById("room-nights").value);
}

function getParkingNights() {
  return parseInt(document.getElementById("parking-nights").value);
}

function calcResult() {
  const roomType = getRoomType();
  const spaUser = getSpaUse();
  const roomSize = getRoomSize();
  const roomNights = getRoomNights();
  const parkingNights = getParkingNights();

  let price;

  if (roomType === "standard") {
    price = roomNights * 100;
  } else if (roomType === "junior-suite") {
    price = roomNights * 120;
  } else {
    price = roomNights *150;
  }

  if (spaUser === true) {
    price += roomNights * 20
  }

  if (roomSize === "single") {
    price = price * 0.75;
  } else if (roomSize === "triple") {
    price = price * 1.25;
  } else {
    price = price
  }

  if (parkingNights) {
    const parkingPrice = parkingNights * 10;
    price = price + parkingPrice;
  }

  return price;
}

function handleFormChange() {
  const price = calcResult();
  
  document.getElementById("result").innerHTML = "El precio total es de " + price + " euros";
}

document.getElementById("room-type").addEventListener("change", handleFormChange);
document.getElementById("spa-selected").addEventListener("change", handleFormChange);
document.getElementById("room-size").addEventListener("change", handleFormChange);
document.getElementById("room-nights").addEventListener("keyup", handleFormChange);
document.getElementById("parking-nights").addEventListener("keyup", handleFormChange);
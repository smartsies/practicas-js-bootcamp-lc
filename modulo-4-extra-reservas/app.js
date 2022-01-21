let roomType = "standard";
let spaUser = false;
let roomSize = "double";
let roomNights = 0;
let parkingNights = 0;

function calcResult() {
  let price;

  if (roomType === "standard") {
    price = roomNights * 100;
  } else if (roomType === "junior-suite") {
    price = roomNights * 120
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

  document.getElementById("result").innerHTML = "El precio total es de " + price + " euros";
}

function handleRoomTypeChange(event) {
  roomType = event.target.value;
  calcResult();
}

function handleSpaSelectorChange(event) {
  spaUser = event.currentTarget.checked;
  calcResult();
}

function handleRoomSizeChange(event) {
  roomSize = event.target.value;
  calcResult();
}

function handleRoomNightsChange(event) {
  roomNights = parseInt(event.target.value);
  calcResult();
}

function handleParkingNightsChange(event) {
  parkingNights = parseInt(event.target.value);
  calcResult();
}

document.getElementById("room-type").addEventListener("change", handleRoomTypeChange);
document.getElementById("spa-selected").addEventListener("change", handleSpaSelectorChange);
document.getElementById("room-size").addEventListener("change", handleRoomSizeChange);
document.getElementById("room-nights").addEventListener("keyup", handleRoomNightsChange);
document.getElementById("parking-nights").addEventListener("keyup", handleParkingNightsChange);
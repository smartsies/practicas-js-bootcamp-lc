let roomType = "standard";
let spaUser = false;
let roomSize = "double";
let roomNights = 0;
let parkingNights = 0;

let price;

function handleRoomTypeChange(event) {
  roomType = event.target.value;
}

function handleSpaSelectorChange(event) {
  if (event.currentTarget.checked) {
    spaUser = true;
  } else {
    spaUser = false
  };
}

function handleRoomSizeChange(event) {
  roomSize = event.target.value;
}

function handleRoomNightsChange(event) {
  roomNights = parseInt(event.target.value);
}

function handleParkingNightsChange(event) {
  parkingNights = parseInt(event.target.value);
}

function calcResult() {
  if (roomType === "standard") {
    price = roomNights * 100;
  } else if (roomType === "junior-suite") {
    price = roomNights * 150
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
}

function handleFormChange(event) {

  if (event.target.id === "room-type") handleRoomTypeChange(event);
  if (event.target.id === "spa-selected") handleSpaSelectorChange(event);
  if (event.target.id === "room-size") handleRoomSizeChange(event);
  if (event.target.id === "room-nights") handleRoomNightsChange(event);
  if (event.target.id === "parking-nights") handleParkingNightsChange(event);

  calcResult();
  
  document.getElementById("result").innerHTML = "El precio total es de " + price + " euros";
}



document.getElementById("room-type").addEventListener("change", handleFormChange);
document.getElementById("spa-selected").addEventListener("change", handleFormChange);
document.getElementById("room-size").addEventListener("change", handleFormChange);
document.getElementById("room-nights").addEventListener("keyup", handleFormChange);
document.getElementById("parking-nights").addEventListener("keyup", handleFormChange);
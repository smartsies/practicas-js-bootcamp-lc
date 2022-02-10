//constantes
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

//datos de entrada
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

//función para habilitar/deshabilitar el botón de calcular
//la llamo nada más declararla para que cuando la página se cargue, el botón comience deshabilitado
function isButtonDisabled(cart) {
  let count = 0;

  for (let product of cart) {
    count += product.units;
  }

  if (count === 0) {
    document.getElementById("calc-total-button").disabled = true;
  } else {
    document.getElementById("calc-total-button").disabled = false;
  }
}

isButtonDisabled(products);

//función para setear el número de unidades seleccionado
function setUnitsAmount(event, cart) {
  for (i = 0; i < cart.length; i++) {
    if (event.target.id == i) {
      cart[i].units = event.target.valueAsNumber;
    }
  }
}

//función que se ejecuta con cada cambio en un input
//setea la cantidad de unidades + comprueba si el botón tiene que estar habilitado o deshabilitado
function handleInputChange(event) {
  setUnitsAmount(event, products);
  isButtonDisabled(products);
}

//funciones para crear cada uno de los elementos HTML que necesito para montar la lista
function createProductDescription(product) {
  let descriptionNode = document.createElement("span");
  descriptionNode.innerText = product.description;
  return descriptionNode;
}

function createProductPrice(product) {
  let priceNode = document.createElement("span");
  priceNode.innerText = " - " + product.price + " €/ud.";
  return priceNode;
}

function createProductAmountInput(product, index) {
  let inputNode = document.createElement("input");
  inputNode.setAttribute("type", "number");
  inputNode.setAttribute("min", 0);
  inputNode.setAttribute("max", product.stock);
  inputNode.setAttribute("id", index);
  inputNode.setAttribute("value", 0);
  inputNode.addEventListener("change", handleInputChange);
  return inputNode;
}

//generar dinámicamente el HTML que muestra la lista de productos, el precio y el input de unidades
function printCart(cart) {
  let index = 0;

  for (let product of cart) {
    const descriptionNode = createProductDescription(product);
    const priceNode = createProductPrice(product);
    const inputNode = createProductAmountInput(product, index);
  
    const liNode = document.createElement("li");
    liNode.appendChild(descriptionNode);
    liNode.appendChild(priceNode);
    liNode.appendChild(inputNode);
  
    document.getElementById("products-list").appendChild(liNode);
    index++;
  }
}

printCart(products);


//funciones para calcular e imprimir en pantalla la factura
function calcProductPrice(product) {
  return product.price * product.units;
}

function calcProductIVA(product, productPrice) {
  return productPrice * product.tax / 100;
}

function printTotal(subtotal, taxes, total) {
  const subtotalNode = document.createTextNode("Subtotal: " + subtotal + " €");
  const ivaNode = document.createTextNode("IVA: " + taxes + " €");
  const totalNode = document.createTextNode("TOTAL: " + total + " €");

  document.getElementById("subtotal").appendChild(subtotalNode);
  document.getElementById("iva").appendChild(ivaNode);
  document.getElementById("total").appendChild(totalNode);
}

function calcTotal() {
  let subtotal = 0;
  let taxes = 0;
  
  for (const product of products) {
    const productPrice = calcProductPrice(product);
    const productIVA = calcProductIVA(product, productPrice);
    subtotal += productPrice;
    taxes += productIVA;
  }

  const totalPrice = subtotal + taxes;

  printTotal(subtotal, taxes, totalPrice);
}

document.getElementById("calc-total-button").addEventListener("click", calcTotal);
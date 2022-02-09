// constantes
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// datos de entrada
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

//función para setear el valor de units en el array con cada cambio en los inputs
function setProductAmount(event) {
  for (i = 0; i < products.length; i++) {
    if (event.target.id == i) {
      products[i].units = event.target.valueAsNumber;
    }

  }
}

// funciones para crear cada uno de los elementos HTML que necesito para montar la lista

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
  inputNode.addEventListener("change", setProductAmount);
  return inputNode;
}

// generar dinámicamente el HTML que muestra la lista de productos, el precio y el input de unidades
function printCart(cart) {
  let index = 0;

  for (const product of cart) {
    let descriptionNode = createProductDescription(product);
    let priceNode = createProductPrice(product);
    let inputNode = createProductAmountInput(product, index);
  
    let liNode = document.createElement("li");
    liNode.appendChild(descriptionNode);
    liNode.appendChild(priceNode);
    liNode.appendChild(inputNode);
  
    document.getElementById("products-list").appendChild(liNode);
    index++;
  }

}

printCart(products);


// funciones para calcular la factura
function calcProductPrice(product) {
  return product.price * product.units;
}

function calcProductIVA(product, productPrice) {
  return productPrice * product.tax / 100;
}

function printTotal(subtotal, taxes, total) {
  let subtotalNode = document.createTextNode("Subtotal: " + subtotal + " €");
  let ivaNode = document.createTextNode("IVA: " + taxes + " €");
  let totalNode = document.createTextNode("TOTAL: " + total + " €");

  document.getElementById("subtotal").appendChild(subtotalNode);
  document.getElementById("iva").appendChild(ivaNode);
  document.getElementById("total").appendChild(totalNode);
}

function calcTotal() {
  let subtotal = 0;
  let taxes = 0;
  
  for (const product of products) {
    let productPrice = calcProductPrice(product);
    let productIVA = calcProductIVA(product, productPrice);
    subtotal += productPrice;
    taxes += productIVA;
  }

  const totalPrice = subtotal + taxes;

  printTotal(subtotal, taxes, totalPrice);
}

document.getElementById("calc-total-button").addEventListener("click", calcTotal);
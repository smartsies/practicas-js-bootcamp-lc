const shoppingCart = [
  {
    id: 111,
    name: "Salvia Oficinalis (maceta 13cm)",
    price: 2.99,
    count: 1,
    premium: false
  },
  {
    id: 112,
    name: "Abono universal clavos 20 uds",
    price: 2.49,
    count: 2,
    premium: false,
  },
  {
    id: 113,
    name: "Arco Iris Sustrato Universal (10 litros)",
    price: 1.99,
    count: 1,
    premium: false,
  },
  {
    id: 114,
    name: "Strelitzia Reginae (maceta 14cm)",
    price: 8.99,
    count: 5,
    premium: true,
  },
  {
    id: 115,
    name: "Bouquet siempreviva 3srt",
    price: 6.99,
    count: 2,
    premium: true,
  }
];

//Función para imprimir carrito de la compra por consola
function printShoppingCart(cart) {
  for (item of cart) {
    for (attr in item) {
      console.log(attr + ": " + item[attr])
    }
    
    console.log("---------")
  }
}

//Función para eliminar un producto del carrito de la compra
function removeProduct(cart, itemToBeRemoved) {
  let index;

  for (i = 0; i < cart.length; i++) {
    if (cart[i].id === itemToBeRemoved) {
      index = i;
    }
  }

  return cart.splice(index, 1);
}

//Función para calcular el importe total del carrito
function calcTotal(cart) {
  let total = 0;

  for (item of cart) {
    total += item.price * item.count;
  }

  return total;
}

//Función para filtrar los productos premium
function filterPremiumProducts(cart) {
  let premiumItems = [];

  for (item of cart) {
    if (item.premium) premiumItems.push(item);
  }

  return premiumItems;
}

//Función para determinar si se puede hacer descuento
function hasDiscount(totalAmount) {
  if (totalAmount > 50) {
    return totalAmount * 0.95;
  }

  return totalAmount;
}

//Función para determinar si se cobran los gastos de envío
function hasShippingCosts(cart) {
  let premiumItems = filterPremiumProducts(cart);

  if (cart.length === premiumItems.length) {
    console.log('Gastos de envío cero');
  } else {
    console.log('Con gastos de envío');
  }
}

//---------EJERCICIO 1 + OPCIONAL---------
//Listar todos los elementos del carrito en el HTML
for (item of shoppingCart) {
  const liNode = document.createElement("li");

  for (attr in item) {
    if (attr === "name" || "price" || "premium") {
      const pNode = document.createElement("p");
      const textNode = document.createTextNode(attr + ": " + item[attr]);
      pNode.appendChild(textNode);
      liNode.appendChild(pNode);
    }
  }

  document.getElementById("products-list").appendChild(liNode);
}

//---------EJERCICIO 2---------
//Eliminar un producto del carrito de la compra
console.log("---------EJERCICIO 2---------");

removeProduct(shoppingCart, 113);

printShoppingCart(shoppingCart);

//---------EJERCICIO 3---------
//Calcular el total del carrito de la compra 
//Se calcula sobre el carrito con un elemento ya eliminado en el ejercicio anterior
//Aplicar un descuento del 5% si la compra es mayor de 50€
//Calcular si tiene gastos de envío (EJERCICIO OPCIONAL)
console.log(" ");
console.log("---------EJERCICIO 3---------");

const total = calcTotal(shoppingCart);

const totalWithDiscount = hasDiscount(total);

console.log("Total: " + totalWithDiscount + " euros")

hasShippingCosts(shoppingCart);

//---------EJERCICIO 4---------
//Filtrar los productos que sean premium
//Calcular si tiene gastos de envío (EJERCICIO OPCIONAL)
console.log(" ");
console.log("---------EJERCICIO 4---------");

const premiumItems = filterPremiumProducts(shoppingCart);

console.log('Productos premium:')

printShoppingCart(premiumItems);

hasShippingCosts(premiumItems);
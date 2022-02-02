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

//listar todos los elementos del carrito
console.log("---------EJERCICIO 1---------");

for (item of shoppingCart) {
  for (attr in item) {
    console.log(attr + ": " + item[attr])
  }
  console.log("---------")
}

//eliminar un producto del carrito de la compra
console.log(" ");
console.log("---------EJERCICIO 2---------");

const itemToBeEliminatedId = 113;
let index;

for (i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i].id === itemToBeEliminatedId) {
    index = i;
  }
}

shoppingCart.splice(index, 1);

for (item of shoppingCart) {
  for (attr in item) {
    console.log(attr + ": " + item[attr])
  }
  console.log("---------")
}

//calcular el total del carrito de la compra 
//(se calcula sobre el carrito con un elemento ya eliminado en el ejercicio anterior)
console.log(" ");
console.log("---------EJERCICIO 3---------");

let total = 0;

for (item of shoppingCart) {
  total = total + item.price * item.count;
}

console.log("Total: " + total + " euros")

//filtrar por los productos premium
console.log(" ");
console.log("---------EJERCICIO 4---------");

let premiumItems = [];

for (item of shoppingCart) {
  if (item.premium) premiumItems.push(item);
}

console.log('Items premium:')
for (item of premiumItems) {
  for (attr in item) {
    console.log(attr + ": " + item[attr])
  }
  console.log("---------")
}
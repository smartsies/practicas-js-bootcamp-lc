//EJERCICIO 1 - Calcular el precio total con IVA de una compra de productos

const product = {
  count: 3,
  price: 12.55,
  type: "clothes"
};

//Calculo el precio total sin IVA

function getTotal(product) {
  return product.count < 0 ? 0 : product.count * product.price;
}

//Calculo el IVA por unidad

function getVat(product) {
  let vat;
  switch (product.type) {
    case "food": 
      vat = product.price * 0.1;
      break;
    case "book":
      vat = product.price * 0.04;
      break;
    default:
      vat = product.price * 0.21;
      break;
  }
  return vat;
};

//Calculo el IVA total de la compra

function getTotalVat (product) {
  return product.count < 0 ? 0 : product.count * getVat(product);
}

//Calculo el precio total de la compra con IVA y lo imprimo
//Me he tomado la libertad de usar toPrecision(), que es lo que he encontrado para resolver el rollo de los decimales extralargos y erróneos, pero no estoy segura de que esté bien así.

function totalPurchasePrice(product) {
  const subtotal = getTotal(product);
  const vat = getTotalVat(product);
  const total = subtotal + vat;

  console.log("RESULTADOS DEL EJERCICIO 1:")
  console.log("Subtotal: ",  subtotal.toPrecision(3) + " €")
  console.log("IVA: ",  vat.toPrecision(3) + " €")
  console.log("Total: ",  total.toPrecision(3) + " €")
  console.log("");
}

totalPurchasePrice(product);


//EJERCICIO 2 - Calcular el sueldo neto de una nómina

const employee = {
  gross: 14500,
  children: 2,
  wages: 14,
};

//Calculo qué retención se aplica según el sueldo bruto y el número de hijos/as

function getWithholding(employee) {
  const hasChildren = employee.children > 0;
  let withholding;

  switch (true) {
    case (employee.gross < 12000):
      console.log("Entro en 1");
      withholding = 0;
      break;
    case (employee.gross < 24000):
      console.log("Entro en 2");
      withholding = 0.08;
      break;
    case (employee.gross < 34000):
      console.log("Entro en 3");
      withholding = 0.16;
      break;
    case (employee.gross >= 34000):
      console.log("Entro en 4");
      withholding = 0.3;
      break;
    default:
      console.log("Entro en default");
      break;
  }

  //Si tiene hijos/as se le restan dos puntos a la retención, salvo si la retención ya es del 0% (porque entonces la retención sería de -0.02%)
  return (hasChildren && withholding > 0) ? withholding - 0.02 : withholding;
}

//Calculo el salario mensual neto, aplicando la retención correspondiente y según el número de pagas. Imprimo el resultado.

function calcNetSalary(employee) {
  const withholding = getWithholding(employee);
  const holdedAmount = employee.gross * withholding;
  const anualNetSalary = employee.gross - holdedAmount;
  const mensualNetSalary = anualNetSalary / employee.wages;

  console.log("RESULTADOS DEL EJERCICIO 2:")
  console.log("El salario bruto anual es de ", employee.gross + " €");
  console.log("La retención a aplicar es del ", withholding + " %");
  console.log("El salario neto mensual es de ", mensualNetSalary.toPrecision(5) + " €");
}

calcNetSalary(employee);
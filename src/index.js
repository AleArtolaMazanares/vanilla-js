import { calculadora } from "./calculadora.js";
let Sumar = calculadora.Sumar;
let restar = calculadora.restar;
let mulplicar = calculadora.mulplicar;
let division = calculadora.division;

// const pruebasuma = Sumar(2, 5);
// console.log(pruebasuma);

// const pruebaresta = restar(2, 5);
// console.log(pruebaresta);

// const pruebamulplicar = mulplicar(2, 5);
// console.log(pruebamulplicar);

// const pruebadivision = division(2, 5);
// console.log(pruebadivision);

function calcular(operacion, numero1, numero2) {
  let resultado;
  if (operacion == "sumar") {
    resultado = Sumar(numero1, numero2);
  } else if (operacion == "dividir") {
    resultado = division(numero1, numero2);
  }
  return resultado;
}

let resultadoSuma = calcular("sumar", 1, 2);
let resultadoSuma1 = calcular("dividir", 1, 2);
console.log(resultadoSuma);
console.log(resultadoSuma1);

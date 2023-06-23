import { calculadora } from "./calculadora.js";
let Sumar = calculadora.Sumar;
let restar = calculadora.restar;
let mulplicar = calculadora.mulplicar;
let division = calculadora.division;

function calcular(operacion, numero1, numero2) {
  let resultado;
  if (operacion == "sumar") {
    resultado = Sumar(numero1, numero2);
  } else if (operacion == "dividir") {
    resultado = division(numero1, numero2);
  } else if (operacion == "restar") {
    resultado = restar(numero1, numero2);
  } else if (operacion == "multiplicacion") {
    resultado = mulplicar(numero1, numero2);
  }

  return resultado;
}

let resultadoSuma = calcular("sumar", 1, 2);
let resultadoSuma1 = calcular("dividir", 1, 2);
let resultadoDividir = calcular("restar", 1, 2);
let resultadoMultiplicacion = calcular("multiplicacion", 1, 2);
console.log(resultadoSuma);
console.log(resultadoSuma1);
console.log(resultadoDividir);
console.log(resultadoMultiplicacion);

// let lista = [1];
// console.log(Pares(lista));

// funcion para sumar
function Suma(n1, n2) {
  return n1 + n2;
}
// funcion para sumar

// funcion de la resta
function Resta(a, b) {
  return a - b;
}
// funcion de la resta

// funcion multiplicar
function Multiplicar(a, b) {
  return a * b;
}
// funcion multiplicar

// funcion dividir
function dividir(a, b) {
  return a / b;
}
// funcion dividir

// funcion pares

function Pares(n1) {
  if (n1 % 2 == 0) {
    console.log(`${n1} es par`);
    return 0;
  } else {
    console.log(`${n1} no es par`);
    return 1;
  }
}

let listaNumeros = [2, 4, 6, 8].filter(Pares);

// funcion pares

// funcion pares

function numerosDivisibles(n1) {
  if (n1 % 5 === 0) {
    return 0;
  } else if (n1 % 5 === 5) {
    return 5;
  }
  return 1;
}

let divisibles = [40, 15, 15].filter(numerosDivisibles);

// funcion pares

// caja de funciones

let funciones = {
  Resta,
  Suma,
  Multiplicar,
  dividir,
  Pares,
  listaNumeros,
  numerosDivisibles,
  divisibles,
};
// caja de funciones

// exporta

export { funciones };
// exporta

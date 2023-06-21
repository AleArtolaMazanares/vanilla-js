// // Inserte el código aquí
// let arreglo = [1, 2, 3, 4];

function ClonarArreglo(arreglo) {
  return (lista = [...arreglo]);
}

let areglo1 = [1, 2, 3, 4];
ClonarArreglo(areglo1);

function ClonarObjeto(objeto) {
  return (lista = { ...objeto });
}

let casa = {
  techo: "rojo",
  verde: "verde",
};

ClonarObjeto(casa);

// tres
function SumaTotal(valor1, valor2) {
  return (sumar = valor1 + valor2);
}
let sumaActual = [1, 2, 4, 5].reduce(SumaTotal, 0);
console.log(sumaActual);
// tres

// cuatro

function Saludar(nombre) {
  return (lista = nombre + saludo);
}
let nombre = ["samuel "];
let saludo = ["hola como estas?"];
Saludar(nombre);

// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };

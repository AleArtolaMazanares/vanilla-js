// importacion
import { funciones } from "../src/main.js";
// importacion

// variables
let Suma = funciones.Suma;
let resta = funciones.Resta;
let multiplicar = funciones.Multiplicar;
let dividir = funciones.dividir;
let pares = funciones.Pares;
let listaDeNumeros = funciones.listaNumeros;
let divisibles = funciones.divisibles;
// variables

// test suma
describe("suma", () => {
  test("suma 1 + 2 es 3", () => {
    expect(Suma(1, 2)).toBe(3);
  });
});
// test suma

// test resta
describe("resta", () => {
  test("resta 6-3 es 3", () => {
    expect(resta(6, 3)).toBe(3);
  });
});
// test resta

// multiplicar
describe("multiplicar", () => {
  test("multiplicar 2 * 2 es 4", () => {
    expect(multiplicar(2, 2)).toBe(4);
  });
});
// multiiplicar

// dividir
describe("dividrir", () => {
  test("dividir 57 / 6 es 9.5", () => {
    expect(dividir(57, 6)).toBe(9.5);
  });
});
// dividir

// pares
describe("par", () => {
  test("lista de numeros es par", () => {
    expect(pares(listaDeNumeros)).toBe(0);
  });
});
// pares

// divisibles de 5
describe("divisibles", () => {
  test("lista de numeros es divisibles", () => {
    expect(pares(divisibles)).toStrictEqual(0, 5);
  });
});
// divisibles de 5

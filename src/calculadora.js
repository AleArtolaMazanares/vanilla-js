function Sumar(a, b) {
  const total = a + b;
  return total;
}

function restar(a, b) {
  const total = a - b;
  return total;
}

function mulplicar(a, b) {
  const total = a * b;
  return total;
}

function division(a, b) {
  const total = a / b;
  return total;
}

let calculadora = {
  Sumar,
  restar,
  mulplicar,
  division,
};

export { calculadora };


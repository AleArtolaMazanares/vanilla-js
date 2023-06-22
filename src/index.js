// function mueveReloj() {
//   momentoActual = new Date();
//   hora = momentoActual.getHours();
//   minuto = momentoActual.getMinutes();
//   segundo = momentoActual.getSeconds();

//   horaImprimible = hora + " : " + minuto + " : " + segundo;

//   document.form_reloj.reloj.value = horaImprimible;

//   setTimeout("mueveReloj()", 1000);
// }

// const solicitudPromesa = fetch(" http://localhost:3000/users ");

// solicitudPromesa.then(function (respuesta) {
//   console.log("la respuesta es:", respuesta);
// });

//intentandolo

function ObtenerApi() {
  fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => response.json())
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    });
}

function Promesa() {
  indentificador = new Promise((resolver) => {
    setTimeout(() => {
      resolver(ObtenerApi());
    }, 1000);
  });
  return indentificador;
}

async function Users() {
  const usuarios = await Promesa();
  console.log("tu lista de api");
}

Users();

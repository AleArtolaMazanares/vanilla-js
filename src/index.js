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
  return new Promise((resolv) => {
    setTimeout(() => {
      resolv(`lista1 ${ObtenerApi()}`);
    }, 1000);
  });
}

function Promesa2() {
  return new Promise((resolver) => {
    setTimeout(() => {
      resolver(ObtenerApi());
    }, 4000);
  });
}

async function Users() {
  const Esperar = await Promesa();
  console.log("tu lista de api");
}

async function Users2() {
  const users = await Promesa2();
  console.log("tu lista de api 2");
}

Users(Users2());
// function usuarios() {
//   return new Promise((resolver) => {
//     setTimeout(() => {
//       resolver(ObtenerUsuariosApi());
//     }, 3000);
//   });
// }

// async function USers() {
//   const USers = await usuarios();
//   console.log(USers);
// }

// USers();

// let promesa = CrearRegalo();

// promesa
//   .then(function (dato) {
//     console.log("abrir regalo", dato);
//   })
//   .catch(function (razon) {
//     console.log("no recibe nada", razon);
//   });

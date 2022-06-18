"use strict";

//Formulario de contacto
var formularioCliente = document.getElementById("formularioCliente");

function contactarCliente(e) {
  e.preventDefault();
  console.log("Hola " + e + "! pronto nos contactaremos contigo.");
}

formularioCliente.addEventListener("submit", contactarCliente(cliente.target.nombreCliente.value)); //Creacion de Cards

var packs = [{
  id: 0,
  nombre: " Pack Silver ",
  precio: "40",
  descripcion: "Sitio web con 2 paginas",
  disponibilidad: true,
  img: "imagenesPacks/packSilver.jpg"
}, {
  id: 1,
  nombre: " Pack Premium ",
  precio: "80",
  descripcion: "Sitio web con 4 paginas",
  disponibilidad: true,
  img: "imagenesPacks/packPremium.jpg"
}, {
  id: 2,
  nombre: " Pack Gold ",
  precio: "120",
  descripcion: "Sitio web con 4 paginas + servicio de mantenimiento mensual",
  disponibilidad: false,
  img: "imagenesPacks/packGold.jpg"
}];

function packsHTML(packs) {
  var container = document.getElementById("containerCards");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = packs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pack = _step.value;
      var card = document.createElement("div");
      card.innerHTML = "\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\" ".concat(pack.img, " \" class=\"card-img-top\" alt=\"...\">\n           <div class=\"card-body\">\n             <h5 class=\"card-title\">").concat(pack.nombre, "</h5>\n             <p class=\"card-text\">").concat(pack.descripcion, "</p>\n             <p class=\"card-text\">").concat(pack.precio, "</p>\n             <a id=\"botonContratar\" href=\"#\" class=\"btn btn-primary\"> Contratar </a>\n            </div>\n      </div>\n                \n    ");
      container.appendChild(card);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

packsHTML(packs); //Fin de codigo
// alert(
//   "Contamos con 3 packs distintos " +
//     packBasico.nombre +
//     packCompleto.nombre +
//     packPremium.nombre
// );
// var packElegido = prompt("Ingrese el nombre del pack que desea");
// var packLowerCase = packElegido.toLowerCase();
// switch (packLowerCase) {
//   case "pack basico":
//     alert("El pack inicial tiene un costo de $" + packBasico.precio);
//     var precioFinalPack = packBasico.precio;
//     if (packBasico.disponibilidad === true) {
//       alert("El pack inicial esta disponible");
//     }
//     break;
//   case "pack completo":
//     alert("El pack completo tiene un costo de $" + packCompleto.precio);
//     var precioFinalPack = packCompleto.precio;
//     if (packCompleto.disponibilidad === true) {
//       alert("El pack completo esta disponible");
//     }
//     break;
//   case "pack premium":
//     alert("El pack premium tiene un costo de $" + packPremium.precio);
//     if (packPremium.disponibilidad === true) {
//       alert("El pack premium esta disponible");
//     } else {
//       alert("El pack premium no esta disponible");
//     }
//     break;
// }
// var precioAgregados = prompt(
//   "Escriba la cantidad de paginas web que desea agregar a su sitio web, en numeros"
// );
// switch (precioAgregados) {
//   case "1":
//     alert("El precio de 1 pagina es de $20");
//     break;
//   case "2":
//     alert("El precio de 2 paginas es de $40");
//     break;
//   case "3":
//     alert("El precio de 3 paginas es de $60");
//     break;
//   case "4":
//     alert("El precio de 4 paginas es de $80");
//     break;
// }
// if (precioAgregados >= 5) {
//   alert(
//     "Lo siento pero no contamos con el equipo para trabajar con mas de 4 paginas web"
//   );
// }
// function precioFinal(precioAgregados) {
//   return precioAgregados * 20;
// }
// function precioFinalCompleto(precioFinal) {
//   return precioFinal + precioFinalPack;
// }
// if (precioAgregados <= 4) {
//   alert(
//     "El precio final de su sitio web de $" +
//       precioFinal(precioAgregados) +
//       " + $" +
//       precioFinalPack
//   );
// }
// alert(
//   "El " +
//     "Pack basico " +
//     "tiene un nombre de " +
//     packBasico.nombre.length +
//     " caracteres"
// );
// let packsProximamente = [
//   {
//     nombre: "Pack Silver",
//     precio: 100.0,
//   },
//   {
//     nombre: "Pack Gold",
//     precio: 150.0,
//   },
//   {
//     nombre: "Pack Platinum",
//     precio: 200.0,
//   },
// ];
// let packMasBarato = packsProximamente.find(
//   (pack) => pack.nombre == "Pack Silver"
// );
// let packMasBaratoString = JSON.stringify(packMasBarato);
// alert("El proximo pack mas barato va a ser " + packMasBaratoString);
// let packMasCaro = packsProximamente.filter((pack) => pack.precio > 150.0);
// let packMasCaroString = JSON.stringify(packMasCaro);
// alert("El proximo pack mas caro va a ser " + packMasCaroString);
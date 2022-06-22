"use strict";

//Typed.js 
var typed = new Typed('.type', {
  strings: ['Developer.', 'Freelancer.', 'Student.'],
  typeSpeed: 75,
  backSpeed: 75,
  loop: true,
  smartbackspace: true
}); //Productos JSON

var productosJSON = []; //Carro

var carrito = [];
var listaCarrito = document.getElementById("listaCarrito"); //Creacion de Cards

function packsHTML(pack) {
  var container = document.getElementById("creacionCards");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _pack = _step.value;
      var card = document.createElement("div");
      card.innerHTML = "\n    \n\n    <div class=\"card\">\n    \n    <div class=\"card-body\">\n        <h5 class=\"card-title\">$".concat(_pack.precio, "</h5>\n        <p class=\"tituloCard card-text\">").concat(_pack.nombre, "</p>\n        <p class=\"card-text\"><small class=\"text-muted\">").concat(_pack.descripcion, "</small></p>\n        <div class=\"botones\">\n          <a id=\"conocer ").concat(_pack.id, "\" href=\"#\" class=\"btn btn-primary\"> Descubrir </a>\n          <a id=\"btn ").concat(_pack.id, "\" href=\"#\" class=\"btn btn-primary\"> Lo quiero! </a>\n        </div>\n    </div>\n</div>\n    ");
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

  packsJSON.forEach(function (pack) {
    document.getElementById("btn ".concat(pack.id)).addEventListener("click", function () {
      agregarAlCarrito(pack);
    });
  });
  packsJSON.forEach(function (pack) {
    document.getElementById("conocer ".concat(pack.id)).addEventListener("click", function () {
      mostrarPack(pack);
    });
  });
} //Obtener JSON


function obtenerJSON() {
  var URLJSON, respuesta, data, packsJSON;
  return regeneratorRuntime.async(function obtenerJSON$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          URLJSON = "/packs.json";
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(URLJSON));

        case 3:
          respuesta = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(respuesta.json());

        case 6:
          data = _context.sent;
          packsJSON = data;
          packsHTML(packsJSON);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
} //Agregar packs al carrito


function agregarAlCarrito(packCompra) {
  carrito.push(packCompra);
  console.log(carrito);
  document.getElementById("listaCarrito").innerHTML += "\n  <tr>\n    <td>".concat(packCompra.id, "</td>\n    <td>").concat(packCompra.nombre, "</td>\n    <td>").concat(packCompra.precio, "</td>\n  </tr>\n  ");
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Su Pack ha sido agregado al carrito!",
    showConfirmButton: false,
    timer: 1500
  });
  document.getElementById("precioTotal").innerHTML = "\n  <h2>Total: ".concat(calcularTotal(), "</h2>\n  "); // Mantener el carrito limpio

  sessionStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarPack(pack) {
  Swal.fire({
    title: "".concat(pack.nombre),
    html: "\n    <table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Sitio web:</th>\n      <td>".concat(pack.web, "</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Disponibilidad:</th>\n      <td>").concat(pack.disponibilidad, "</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Mantenimiento mensual:</th>\n      <td>").concat(pack.mantenimiento, "</td>\n    </tr>\n  </tbody>\n</table>\n    \n    \n    \n   \n\n    "),
    confirmButtonText: "Cerrar"
  });
}

function calcularTotal() {
  var suma = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = carrito[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var pack = _step2.value;
      suma = suma + pack.precio * 1;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return suma;
}

obtenerJSON();
packsHTML();
agregarAlCarrito();
mostrarPack();
calcularTotal(); //Fin de codigo
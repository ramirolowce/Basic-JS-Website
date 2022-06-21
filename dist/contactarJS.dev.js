"use strict";

//Formulario de contacto
var formularioCliente = document.getElementById("formularioCliente");
formularioCliente.addEventListener("submit", function (event) {
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var contacto = document.getElementById("contacto");
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Genial, " + nombre + " nos pondremos en contacto contigo!",
    showConfirmButton: false,
    timer: 2250
  });
});
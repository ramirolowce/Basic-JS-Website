"use strict";

//Formulario de contacto
var formularioCliente = document.getElementById("formularioCliente");

function contactarCliente(e) {
  e.preventDefault();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Genial, nos contactaermos con usted.",
    showConfirmButton: false,
    timer: 1500
  });
}

formularioCliente.addEventListener("submit", contactarCliente(e));
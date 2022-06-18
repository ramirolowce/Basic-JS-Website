"use strict";

//Formulario de contacto
var formularioCliente = document.getElementById("formularioCliente");
var contactado = document.getElementById("contactado");
localStorage.setItem("descuentosActuales", "25");
var descuento = localStorage.getItem("descuento");

function contactarCliente(e) {
  e.preventDefault();
  contactado.innerHTML = "Hola ".concat(e.target.nombreCliente.value, "! pronto nos contactaremos contigo al siguiente mail:  ").concat(e.target.emailCliente.value, ", te recordamos\n  que actualmente contamos con un descuento de ").concat(descuentosActuales, "% para que puedas disfrutar de nuestros servicios.");
}

formularioCliente.addEventListener("submit", contactarCliente(e));
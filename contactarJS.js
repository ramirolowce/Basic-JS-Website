//Formulario de contacto

let formularioCliente = document.getElementById("formularioCliente");
let contactado = document.getElementById("contactado");
localStorage.setItem("descuentosActuales", "25");
let descuento = localStorage.getItem("descuento");

function contactarCliente(e) {
  e.preventDefault();
  contactado.innerHTML=`Hola ${e.target.nombreCliente.value}! pronto nos contactaremos contigo al siguiente mail:  ${e.target.emailCliente.value}, te recordamos
  que actualmente contamos con un descuento de ${descuentosActuales}% para que puedas disfrutar de nuestros servicios.`; 
}

formularioCliente.addEventListener(
  "submit",
  contactarCliente(e)
);
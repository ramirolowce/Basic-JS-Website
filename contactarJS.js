//Formulario de contacto

let formularioCliente = document.getElementById("formularioCliente");

formularioCliente.addEventListener("submit", function(event){
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let contacto = document.getElementById("contacto");
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Genial, "+nombre+" nos pondremos en contacto contigo!",
    showConfirmButton: false,
    timer: 2250,
  });
});


//Typed.js 
var typed = new Typed('.type', {
  strings: [
    'Developer.',
    'Freelancer.',
    'Student.'],
  typeSpeed: 75,
  backSpeed: 75,
  loop: true,
  smartbackspace: true,
});


//Productos JSON
let productosJSON = [];


//Carro
let carrito = [];
let listaCarrito = document.getElementById("listaCarrito");


//Creacion de Cards
function packsHTML(pack) {
  let container = document.getElementById("creacionCards");

  for (const pack of pack) {
    let card = document.createElement("div");

    card.innerHTML = `
    

    <div class="card">
    
    <div class="card-body">
        <h5 class="card-title">$${pack.precio}</h5>
        <p class="tituloCard card-text">${pack.nombre}</p>
        <p class="card-text"><small class="text-muted">${pack.descripcion}</small></p>
        <div class="botones">
          <a id="conocer ${pack.id}" href="#" class="btn btn-primary"> Descubrir </a>
          <a id="btn ${pack.id}" href="#" class="btn btn-primary"> Lo quiero! </a>
        </div>
    </div>
</div>
    `;

    container.appendChild(card);
  }

  packsJSON.forEach((pack) => {
    document
      .getElementById(`btn ${pack.id}`)
      .addEventListener("click", function () {
        agregarAlCarrito(pack);
      });
  });

  packsJSON.forEach((pack) => {
    document
      .getElementById(`conocer ${pack.id}`)
      .addEventListener("click", function () {
        mostrarPack(pack);
      });
  });
}


//Obtener JSON
async function obtenerJSON() {
  const URLJSON = "/packs.json";	
  const respuesta = await fetch(URLJSON);
  const data = await respuesta.json();
  const packsJSON = data;
  packsHTML(packsJSON);
}


//Agregar packs al carrito
function agregarAlCarrito(packCompra) {
  carrito.push(packCompra);
  console.log(carrito);
  document.getElementById("listaCarrito").innerHTML += `
  <tr>
    <td>${packCompra.id}</td>
    <td>${packCompra.nombre}</td>
    <td>${packCompra.precio}</td>
  </tr>
  `;
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Su Pack ha sido agregado al carrito!",
    showConfirmButton: false,
    timer: 1500,
  });
  document.getElementById("precioTotal").innerHTML = `
  <h2>Total: ${calcularTotal()}</h2>
  `;
  // Mantener el carrito limpio
  sessionStorage.setItem("carrito", JSON.stringify(carrito));
}


function mostrarPack(pack) {
  Swal.fire({
    title: `${pack.nombre}`,
    html: `
    <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sitio web:</th>
      <td>${pack.web}</td>
    </tr>
    <tr>
      <th scope="row">Disponibilidad:</th>
      <td>${pack.disponibilidad}</td>
    </tr>
    <tr>
      <th scope="row">Mantenimiento mensual:</th>
      <td>${pack.mantenimiento}</td>
    </tr>
  </tbody>
</table>
    
    
    
   

    `,
    confirmButtonText: "Cerrar",
  });
  
}

function calcularTotal(){
  let suma= 0;
  for(const pack of carrito){
    suma = suma + (pack.precio * 1);
  }
  return suma;
}

obtenerJSON();
packsHTML();
agregarAlCarrito();
mostrarPack();
calcularTotal();

//Fin de codigo

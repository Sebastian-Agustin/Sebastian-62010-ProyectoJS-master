const contenedorDeProd = document.getElementById("contenedor-productos")


const cardsProductos = (prod)=>{
  prod.forEach(el => {
    const cardDOM = document.createElement("div")
    cardDOM.innerHTML=
     `<div class="card seccion-buzos" style="width: 18rem;">
     <img src="${el.img}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${el.nombre}</h5>
       <p class="card-text">${el.precio}</p>
       <button id="${el.id}"class="agregar btn btn-primary">Comprar</button>
     </div>
    </div`
    contenedorDeProd.appendChild(cardDOM)
  });
  const btnEvento = document.querySelectorAll(".agregar")
  btnEvento.forEach(el =>{
   el.addEventListener("click", (el)=>{
    agregarAlCarrito(el.target.id)
   })
  })
}

const carrito= []
cardsProductos(productos)

function agregarAlCarrito(id){

 const  prodExiste = carrito.some(el=> el.id === parseInt(id))
  if(prodExiste){
    carrito.map(el=> el.cantidad++) 
  }
  let productoEncontrado = productos.find(prod=> prod.id === parseInt(id))
  if(productoEncontrado === undefined){
    alert("producto no encontrado")
  }
  carrito.push(productoEncontrado)
  console.log(carrito)
}


function eliminarDelCarrito(id) {
  const productoABuscar = carrito.find(el => el.id === parseInt(id));
  if (productoABuscar) {
    if (productoABuscar.cantidad > 1) {
      productoABuscar.cantidad -= 1;
    } else {
      carrito = carrito.filter(el => el.id !== parseInt(id));
    }
  }
}
function eliminarTodoElCarrito() {
  carrito = [];
}

eliminarDelCarrito(5)
console.log(carrito)

    console.dir(e)
}
funcionDeEventos("click",funcionAgregadoraDeEventosAlCarrito, "click")


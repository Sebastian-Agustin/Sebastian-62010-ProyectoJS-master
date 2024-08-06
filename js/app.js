//intaciamos productos
class Productos {
  constructor(id, nombre, precio, img, cantidad){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = cantidad;
  }
}

// Arrays
let productos = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Nodos
const contendorDeCarts = document.getElementById("contenedor-productos");
const agregarbotones = document.getElementsByClassName("btn");

const agregadoraDeEventos = () => {
  const array = Array.from(agregarbotones); // Transformo HTMLCollection en array
  
  array.forEach(el => {
    el.addEventListener("click", (e) => {
      const productoNombre = e.target.parentElement.parentElement.querySelector(".description-carts p").innerText;
      // Aca estoy sacando el (nodo. un metodo.target.parentElement.children[0].innerText)
      const productoCarrito = productos.find(producto => producto.nombre === productoNombre); // TRAIGO EL OBJETO CON EL METODO FIND        

      if (productoCarrito) {
        // Verificar si el producto ya está en el carrito
        const productoEnCarrito = carrito.find(item => item.nombre === productoCarrito.nombre);
        
        if (productoEnCarrito) {
          // Si ya está en el carrito, aumentar la cantidad
          productoEnCarrito.cantidad += 1;
        } else {
          // Si no está en el carrito, agregarlo con cantidad 1
          carrito.push({ ...productoCarrito, cantidad: 1 });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log(carrito);

        // Mostrar alerta de éxito
        Swal.fire({
          title: "Producto agregado!",
          text: "El producto ha sido añadido al carrito.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    });
  });
}

// Crear carts desde JS
const iterarDoom = (productos) => {
  productos.forEach(el => {
    const bodyCart = document.createElement("div");
    bodyCart.classList.add("bodycart");
    bodyCart.innerHTML += `
      <div class="contenedor-img-carts">
        <img class="img-carts" src="${el.img}" alt="">
      </div>
      <div class="description-carts">    
        <p>${el.nombre}</p>
        <p>${el.precio}$</p>
      </div>
      <div class="boton-carts">
        <button class="btn" id="producto-${el.id}">Comprar</button>
      </div>
    `;
    contendorDeCarts.append(bodyCart);
  });
  agregadoraDeEventos();
}

// Consumo JSON e instancio la clase productos
const fetchProductDetails = async () => {
  const url = `js/data.json`;
  const response = await fetch(url);
  const data = await response.json();
    
  productos = data.map(el => new Productos(
    el.id,
    el.nombre,
    el.precio,
    el.img,
    el.cantidad
  ));
  iterarDoom(productos);
};
fetchProductDetails()




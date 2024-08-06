const verCarrito = document.getElementById("boton-ver-carrito");
const modalMain = document.getElementById("modal-main");

const verProductos = () => {
  verCarrito.addEventListener("click", () => {
    // Crear el modal
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <h1>Carrito <i class="bi bi-cart"></i></h1>
        <div>
          <i class="bi bi-x-square-fill cerrar-carrito" id="cerrar-carrito"></i>
        </div>
        <div class="modal-body" id="container-data"></div>
        <div class="modal-vaciar-carrito">
          <div class="modal-total">
            <h3 id="mostrar-total-h3">TOTAL:</h3>
          </div>
          <div class="vaciar-carrito">
            <button class="vaciar-carrito-button" id="modal-vaciar">Vaciar Carrito</button>
            <button class="finalizar-compra" id="finalizar-compra">Comprar!</button>
          </div>
        </div>
      </div>
    `;

    // Agregar el modal al contenedor modalMain
    modalMain.innerHTML = ''; // Limpiar contenido previo
    modalMain.appendChild(modal);

    // Mostrar el modal
    modal.classList.add("show");

    // Agregar evento para cerrar el modal
    const cerrarCarrito = document.getElementById("cerrar-carrito");
    if (cerrarCarrito) {
      cerrarCarrito.addEventListener("click", () => {
        modal.classList.remove("show");
        setTimeout(() => {
          modalMain.innerHTML = ''; // Limpiar contenido después de la animación
        }, 300); // Ajusta el tiempo según la duración de la animación
      });
    }

    // Crear elementos para cada producto en el carrito
    const containerData = document.getElementById("container-data");

    carrito.forEach(e => {
      const datacarrito = document.createElement("div");  
      datacarrito.classList.add("data-carrito");
      datacarrito.innerHTML = `
        <div class="img-carrito">
          <img src="${e.img}" alt="${e.nombre}">
        </div>  
        <div class="producto-nombre">
          <p>${e.nombre}</p>
        </div>
        <div class="producto-precio">
          <p>${e.precio}</p>
        </div>
        <div class="producto-cantidad">
          <p>${e.cantidad}</p>
        </div>
        <div class="producto-eliminar">
          <button class="eliminar-producto-por-id" data-id="${e.id}"><i class="bi bi-trash-fill"></i></button>
        </div>
      `;
      containerData.appendChild(datacarrito);
    });

    // Agregar evento para vaciar el carrito
    const vaciarCarrito = document.getElementById("modal-vaciar");
    vaciarCarrito.addEventListener("click", () => {
      carrito = [];
      localStorage.setItem("carrito", JSON.stringify(carrito));
      containerData.innerHTML = ''; // Limpiar el contenido del modal

      Swal.fire({
        icon: 'success',
        title: 'Carrito vacío',
        text: 'El carrito ha sido vaciado con éxito.'
      });
    });

    // Agregar evento para finalizar la compra
    const finalizarCompra = document.getElementById("finalizar-compra");
    finalizarCompra.addEventListener("click", () => {
      if (carrito.length > 0) {
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        containerData.innerHTML = '';
        Swal.fire({
          icon: 'success',
          title: 'Compra realizada',
          text: '¡Gracias por tu compra!'
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Carrito vacío',
          text: 'No hay productos en el carrito para comprar.'
        });
      }
    });

    // Agregar eventos para eliminar productos
    containerData.addEventListener('click', (e) => {
      if (e.target.closest('.eliminar-producto-por-id')) {
        const id = e.target.closest('.eliminar-producto-por-id').getAttribute('data-id');
        carrito = carrito.filter(item => item.id != id);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        containerData.innerHTML = ''; // Limpiar el contenido del modal
        verProductos(); // Volver a renderizar el modal
      }
    });
  });
};

verProductos();





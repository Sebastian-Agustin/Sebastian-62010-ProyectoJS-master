const verCarrito = document.getElementById("boton-ver-carrito")
const modalMain = document.getElementById("modal-main")



const verProductos = () => {
    verCarrito.addEventListener("click", () => {
        // Evitar el comportamiento predeterminado del enlace

        // Crear el modal
        const modal = document.createElement("div")
        modal.classList.add("modal")
        modal.innerHTML = `
            <div class="modal-content">
                <h1> Carrito <i class="bi bi-cart"></i></h1>
                <div>
                    <i class="bi bi-x-square-fill cerrar-carrito" id="cerrar-carrito"></i>
                </div>
                <div class="modal-body" id="container-data">
                
                </div>
            <div class="modal-vaciar-carrito"> 
                <div class="modal-total">
                     <h3 id="mostrar-total-h3">TOTAL:</h3>
                 </div>
                <div>
                    <button id="modal-vaciar">Vaciar Carrito</button>
                </div>
            </div>
        `;

        // Agregar el modal al contenedor modalMain
        modalMain.innerHTML = ''; // Limpiar contenido previo
        modalMain.appendChild(modal)

        // Mostrar el modal
        modal.classList.add("show")

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
        
        //creo un array con los valores que tenia carrito antes y por cada elemento que hay dentro de ese carrito imprimir en modal
        ////div con img- precio - cantidad -

        const arraymapDeCarrito = carrito.map( (e)=>{
           const containerData = document.getElementById("container-data")
           
           const datacarrito = document.createElement("div")  
           datacarrito.classList.add("data-carrito")
           datacarrito.innerHTML+=`
           
           <div class="img-carrito">
            <img src="${e.img}" alt="">
           </div>  
           <div class="producto-nombre"
            <p>${e.nombre}</p>
           </div>
            <div class="producto-nombre"
             <p>${e.precio}</p>
           </div>
           <div class="producto-cantidad">
           <p> ${e.cantidad}</p>
           </div>
           <div>
           <button id="eliminar-producto-por-id"> <i class="bi bi-trash-fill"> </i></button>
           </div>
           `
           containerData.appendChild(datacarrito)
          

           const vaciarCarrito = document.getElementById("modal-vaciar")
           vaciarCarrito.addEventListener("click", ()=>{ 
            const limpiarCarrito = localStorage.clear()

        })
        })
       
    

    });
}

//paso una funcion para cerrar el carrtio 
verProductos()



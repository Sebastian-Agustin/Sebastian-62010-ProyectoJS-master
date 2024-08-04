//intaciamos productos
class Productos {
  constructor(id, nombre, precio, img, cantidad){
    this.id=id
    this.nombre=nombre
    this.precio=precio
    this.img=img
    this.cantidad=cantidad
  }
}



//arrays
let productos = []

let carrito =  JSON.parse(localStorage.getItem("carrito")) || []


/////////////////////
/////////////////////// en esta parte va los nodos

const contendorDeCarts = document.getElementById("contenedor-productos")//NODO CONTENEDOR DE CARTS
const agregarbotones = document.getElementsByClassName("btn") // ELEMENTOS CLASS HTMLCOLETION


const agregadoraDeEventos = () =>{
 const array = Array.from(agregarbotones) //html coletion los tranformo en array
  // uso la orden superior de forech, por cada elemento voy a iterar esta funcion
  //el seria, a los elementos del array que voy a iterar y le paso la funcion. Si es un objeto. si es un nodo puedo traer metodos que tienen los nodos
  array.forEach(el => {
    el.addEventListener("click", (e)=>{
      const productoNombre = e.target.parentElement.parentElement.children[0].innerText //aca estoy sacando el (nodo. un metodo.target.parentelement.children[0].inneText)
      productoCarrito = productos.find(producto => producto.nombre === productoNombre) // TRAIGO EL OBJETO CON EL METODO FIND        
      if (productoCarrito) {
        carrito.push(productoCarrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log(carrito);
      } else {
        console.error("Producto no encontrado:", productoNombre);
      }                                               
    } )
  })

}


//crear carts desde js //le paso un array
const iterarDoom = (productos) =>{
 
  productos.forEach(el => {
    const bodyCart = document.createElement("div")
    bodyCart.classList.add("bodycart")
    bodyCart.innerHTML+=`
    <img class="img-carts" src="${el.img}" alt="">
    <div class="description-carts">    
        <p>${el.nombre}</p>
        <p>${el.precio}$</p>
      <div class="boton-carts">
        <button class="btn" ${el.id}>Comprar</button>
      </div>
    </div>
    `
    contendorDeCarts.append(bodyCart)
  
  });

  agregadoraDeEventos()
}

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
  ))
  iterarDoom(productos)
};
fetchProductDetails()



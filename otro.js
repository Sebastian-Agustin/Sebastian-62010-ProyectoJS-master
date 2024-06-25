productos=[]

let nombre = prompt("Busca el nombre del productos")



function Clientes(nombre, producto, precio){
 this.nombre= nombre
 this.producto = producto
 this.precio = precio
}

const cliente1 = new Clientes(nombre, producto, 20000)
const cliente2 = new Clientes(nombre, "Gorra")

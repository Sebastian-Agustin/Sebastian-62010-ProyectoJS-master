const productos = [
   {nombre:"Remera", precio:15000},
   {nombre:"Buzo", precio: 20000},
   {nombre:"Gorra", precio: 15000},
   {nombre:"Accesorios ", precio: 4000},
]
let carrito = 0
let usuario = prompt("Desea comprar algo? responde con si o no")

while(usuario!="si" && usuario!="no"){
   alert("Porfavor responde con si o con no")
   usuario = prompt("Desea comprar algo? Responde con si o no")
}


if(usuario=="si"){
   alert("Estos son los productos ")
   let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
 alert(todosLosProductos.join(" - "))
} else if(usuario == "no"){
   alert("Vuelva pronto!")
}

while(usuario !="no"){
   let producto = prompt("Agrega el producto a tu carrito")
   let precio = 0 
   if((producto == "remera"|| producto=="buzo" || producto=="gorra"|| producto == "accesorios")){
   switch(producto){
      case "remera":
      precio = 15000
      break
      case "buzo":
      precio= 20000
      break
      case "gorra":
      precio = 15000
      break
      case "accesorios":
      precio = 4000
      break
   }
   let cantidadDeProductos = parseInt(prompt("Cuantas unidades quiere llevar?"))

   carrito.push({producto, cantidadDeProductos, precio})
}else{
   alert("no tenemos en stock ese producto")
}
usuario =prompt("Quiere agregar algun producto mas ? Pon si o no")
while(usuario==="no"){
 alert("Gracias por su compra, Vuelva pronto!")
 carrito.forEach((carritoFinal) => {
  alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.cantidadDeProductos}, 'total a pagar'${carritoFinal.cantidadDeProductos * carritoFinal.precio}`)
 })
 break
 } 
}

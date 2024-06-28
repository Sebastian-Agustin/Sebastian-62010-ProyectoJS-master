let nombreDelUsuario = prompt("Hola bienvenido !" + "\n"+"Escribe tu nombre")
// let edad = Number(prompt("Ingresa tu edad"))
while(nombreDelUsuario == null){
  nombreDelUsuario = prompt("Hola bienvenido !" + "\n"+"Escribe tu nombre")
}
const saludarCliente = function(nombre){
  alert("Bienvenido "+ nombre)
  return 
}

let saludo = saludarCliente(nombreDelUsuario)

const productos = []
 let confirmacionTienda = confirm("Desea ver nuestros productos en descuento% " + nombreDelUsuario+ " confirme")
console.log(confirmacionTienda)

while(confirmacionTienda == true){
 alert("Seccion de pagina"+"\n"+"Remeras 20%"+"\n"+"Pantalones 50%"+"\n"+"Gorras 15%"+"\n"+"Buzos 30% ")
 let preguntaAlUsuario =prompt("Desea agregar algun producto al carrito? "+ "\n"+"Escriba el nombre del producto que quiera agregar")
 console.log(productos.push(preguntaAlUsuario))
 console.log(productos)

alert("Estos son los producto que agrego "+ productos +"\n")

let elimanarProducto = prompt("Desea eliminar algun producto? Escriba Si o no" ) 
if(elimanarProducto == "Si" || elimanarProducto == "si"){
  productos.pop()
  alert("Usted elimino del carrito el ultimo producto agregado" + productos)
  console.log(productos)
}else if(elimanarProducto =="No" || elimanarProducto =="no"){
  alert("Perfecto! continuemos")
  
}else{
  alert("error!, Los datos ingresados no son los correctos")
}


 confirmacionTienda = confirm("Desea continuar agregando productos? " +nombreDelUsuario+" "+ "confirme")

}
//commmit



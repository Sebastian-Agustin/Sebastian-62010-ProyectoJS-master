let confirmacion = confirm("Para seguir con la pagina es necesario aceptar los terminos y condiciones")
while(confirmacion == false){
  confirmacion = confirm("Para seguir con la pagina es necesario aceptar los terminos y condiciones")
}
let nombreDelUsuario = prompt("Ingresa tu nombre Aqui!")

const bienvenida =(nombreDelUsuario) =>{
   alert("Bienvenido " + nombreDelUsuario + "\n" + "A nuestra tienda de ropa GUUST!!!"+ "\n"+ "La mejor ropa la encontras aca, sin duda!")
  return 
}
bienvenida(nombreDelUsuario);//

const pregunta = prompt(nombreDelUsuario+"\n"+" Lo invitamos a mirar nuestros descuentos% en nuestra tienda!" +"\n"+"Escriba TIENDA si quiere ver nuestro catalogo de ropa" + " Escriba salir en caso de que no quiera")
const producto=[]

  if(pregunta === "TIENDA"){
    alert("Este es nuestro catálogo de ropa:\n1- Remeras\n2- Pantalones\n3- Buzos\n4- Gorras\n");
  }else {
    alert("Gracias por su visita!" + "Vuelva pronto!")
  }


while(pregunta !="TIENDA"){
  pregunta= prompt("Porfavor ingresa nuevamente los datos, Escriba TIENDA SI quiere continuar")
}
  
let bandera = true
while(bandera){
  let nombreDelProducto = prompt("Ingrese el nombre del producto que busca")
  let talle = prompt("ingresa la medida del producto que elegiste")
  let lugar=prompt("Escribe el lugar de envio")
  producto.push(nombreDelProducto)
  producto.push(talle)
  producto.push(lugar)
  console.log(producto)
  let confirmacionDeTienda = confirm("Desea continuar? ")
  if(confirmacionDeTienda == true){
    alert("Genial, sigamos agregando!")
  }
 else{
    alert("Gracias por su compra, este el producto que usted selecciono "+nombreDelProducto +"\n"+"Este es el talle seleccionado "+ talle+"\n" +"Este es el lugar de envio "+ lugar)
    bandera = false
 }
 }
 

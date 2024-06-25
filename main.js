let confirmacion = confirm("Para seguir con la pagina es necesario aceptar los terminos y condiciones")
while(confirmacion == false){
  confirmacion = confirm("Para seguir con la pagina es necesario aceptar los terminos y condiciones")
}
let nombreDelUsuario = prompt("Un gusto! Ingresa tu nombre Aqui!")

const bienvenida =(nombreDelUsuario) =>{
  let saludo = alert("Bienvenido " + nombreDelUsuario + "\n" + "Nuestra tienda de ropa GUUST!!!"+ "\n"+ "La mejor ropa la encontras aca.!")
  return saludo
}
bienvenida(nombreDelUsuario)
const pregunta = prompt(nombreDelUsuario+"\n"+" Lo invitamos a mirar nuestros descuentos% en nuestra tienda!" +"\n"+"Escriba TIENDA si quiere ver nuestro catalogo de ropa")
const productos=[]
const agregarProducto = ()=>{
  const id = prompt("Ingresa el nombre del producto")
  const medida =prompt("ingresa el talle.")
  const lugar =prompt("ingresa el lugar de envio")
  const producto ={id:id,medida:medida,lugar:lugar}
  productos.push(producto)
}
const tienda = prompt("escriba tienda si quiere ver nuestras secciones de ropa ")
while(pregunta=="TIENDA"){
  
}

// while(tienda =="tienda"){

  
//   }


// let seccionDeRopa= prompt("Ingrese el numero del producto"+"\n"+"1-Remeras"+"\n"+"2-Pantalones"+"\n"+"3-Buzos"+"\n"+"4-Gorras")

// if(seccionDeRopa =="1"){
//   alert("Estan son las remeras en stock" + "\n"+"1-Remera De Gust "+"\n"+"2-Remera de Gojo "+ "\n"+ "3-Remera de Fullmetal Alchemist ")
//  agregarProducto()
//  }
//  else if(seccionDeRopa=="2"){
//    alert("Estos son los pantalones en stock"+"\n"+"Pantalón cargo" +"\n"+"Pantalón mom jean"+"\n")
//    agregarProducto()
//  }
//  else if(seccionDeRopa=="3"){
//   alert("Estos son los  en stock"+"\n"+"Oversize con Goku" +"\n"+"Buzo Oversize Baki"+"\n"+"Buzo Oversize Pokemon")
//  agregarProducto()
//  }else if(seccionDeRopa=="4"){
//   alert("Estos son los  en stock"+"\n"+"Gorras Personalizadas" +"\n"+"Gorras Cerradas"+"\n")
//   agregarProducto()
//  }else{
//   alert("Los datos que ingresaste no son los correctos")
//  }


// // for (const i of productos) {
// //   alert("a continuacion los productos")
// //     alert("estos son los productos " + i)
// // }
// // pregunta = confirm(nombreDelUsuario+" Desea ver nuevamente la tienda? " + "\n" + "Porfavor confirme")
// // }






  // const agregarProducto = ()=>{
  //   const id = prompt("Ingresa el nombre del producto")
  //   const medida =prompt("ingresa el talle.")
  //   const lugar =prompt("ingresa el lugar de envio")
  //   const producto ={id:id,medida:medida,lugar:lugar}
  //   productos.push(producto)
  // }

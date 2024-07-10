class Productos{
    constructor(id,nombre,descripcion,precio,img){
        this.id=id
        this.nombre=nombre
        this.descripcion=descripcion
        this.precio=precio
        this.img= img
    }
}


//intanciamos productos para cada seccion
//Primera cards seccion buzos (cards)
const buzos0 = new Productos(0,"Buzo De Pochita", "Buzo de pochita con capucha",50000,"img/Productos/buzos/buzo-81-5433c6759411df423c16770023870520-640-0.webp")
const buzos1 = new Productos(1,"Buzo de GokuDBZ", "Buzo de GokuDBZ con capucha",22000,"img/Productos/buzos/goku-narnaja1-7372386244c0b60b5216481429441007-640-0.webp")
const buzos2 = new Productos(2,"Buzo de Suguro Geto ","Buzo de Suguro Geto con capucha",34000,"img/Productos/buzos/kenjaku-buzo-cfcec92fa452193ac317169348262217-640-0.webp")


//seccion pantalones (cards)
const pantalones3 = new Productos(3,"Short de ErenTitan","Short de algodon de ErenTitan", 20000,"img/Productos/short/short.webp")
const pantalones4 = new Productos(4,"Short de BakiHanma","Short de Algondon de bakinhanma", 30000,"img/Productos/short/shortbaki.webp")
const pantalones5 = new Productos(5,"Short de Attack On Titan","", 10000,"img/Productos/short/shortattack.webp")

//seccion remeras (cards)
const remeras7 = new Productos(7,"Remera de FullMetal","", 40000,"img/Productos/short/shortattack.webp")
const remeras6 = new Productos(6,"Remera de Haikyuu","", 24000,"img/Productos/short/shortattack.webp")
const remeras8 = new Productos(8,"Remera de Gojo","", 14000,"img/Productos/short/shortattack.webp")

// SECCION gorras
const gorras9 = new Productos(9,"Gorra de Fantasmita","", 34000,"img/Productos/gorras/fantasmita-0aa4408fd417e4e40217200226520991-1024-1024.webp")
const gorras10 = new Productos(10,"Gorra de Honguito","", 44000,"img/Productos/gorras/honguitos-ea204a8d4b681e841f17200226996326-1024-1024.webp")
const gorras11= new Productos(11,"Gorra de Mando","", 54000,"img/Productos/gorras/play-25b7e44cd0f92c04de17200226140086-1024-1024.webp")

//para imprimir en cada seccion las cards con su articulo
const arrayBuzos=[ buzos0,buzos1,buzos2]
const arrayDePantalones=[pantalones3,pantalones4,pantalones5]
const arrayDeRemeras=[remeras6,remeras7,remeras8]
const arrayDeGorras=[gorras9,gorras10,gorras11]

//carrito de compras
const carrito =[]

//traer los contenedores padres de las cards
const primeraSeccionBuzos = document.getElementById("primeraSeccion")
const segundaSeccionPantalones = document.getElementById("segundaSeccion")
const terceraSeccionRemeras = document.getElementById("terceraSeccion")
const cuartaSeccionGorras = document.getElementById("cuartaSeccion")



arrayBuzos.forEach(el =>{
primeraSeccionBuzos.innerHTML+=` 
        <div class="card" style="width: 18rem;">
          <img src="${this.img}" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.nombre}</h5>
            <p class="card-text">${this.descripcion}.</p>
            <p class="card-text">${this.precio}</p>
            <button class="agregar btn btn-primary">Comprar</button>
          </div>
         </div> `
})

//en esta funcion agrega el tipo de evento 
function funcionDeEventos(evento,clases,evenetoDelUsuario){
    const nodos = document.getElementsByClassName(clases)// voy a traer todas las clases que quiera que tenga un evento
    const arrayDeNodos = Array.from(nodos)//a cada nodo que traigo con la clase lo convierto en un array.

    //funcion para recorrer las clases dentro del arraydenodos
    arrayDeNodos.forEach( el =>{
        el.addEventListener(evenetoDelUsuario,evento)//le paso como argumento los parametros de la funcion.
        //evento del usuario p
    })

}

//una funcion para agregar el evento al carrito 
function funcionAgregadoraDeEventosAlCarrito(e){
    console.dir(e.target.parentElement)
}
funcionDeEventos(funcionAgregadoraDeEventosAlCarrito,"agregar","click")

//div para mostrar el carrito

    console.dir(e)
}
funcionDeEventos("click",funcionAgregadoraDeEventosAlCarrito, "click")


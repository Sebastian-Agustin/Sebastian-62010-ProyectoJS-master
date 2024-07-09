//clase constructora de productos
class Productos{
    constructor(id,nombre,descripcion,precio,img){
        this.id=id
        this.nombre=nombre
        this.descripcion=descripcion
        this.img= img
        this.precio=precio
    }
    //instacia de las card en el doom 
    card(){
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.nombre}</h5>
          <p class="card-text">${this.descripcion}</p>
          <p class="card-text">${this.precio}</p>
          <a href="#" class="btn btn-primary">${this.precio}</a>
        </div>
      </div>`
    }
}

class Carrusel{
    constructor(id,nombre){
        this.id= id
        this.nombre=nombre
    }
//metodos de carrusel
    bodycarrusel(){
      return `<div id="carouselExample" class="carousel slide "> 
      <div id="carouselExample" class="carousel slide "> -->
    <!--<div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/img-Ecommers/buzo-31-83c3689f453966ad5f16815037256013-640-0.webp" class="d-block w-100" alt="img de Buzos">
          </div>
          <div class="carousel-item">
            <img src="img/img-Ecommers/buzo-sukuna1-c9e80b695b1932fad316518508295603-480-0.webp" class="d-block w-100" alt="Img de Pantalones">
          </div>
          <div class="carousel-item">
            <img src="img/img-Ecommers/buzo.webp" class="d-block w-100" alt="imagen de remera">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </button>
        </div>
      </div>` 

    }
}

const carruse0= new Carrusel(1,"productos")

//intanciamos productos para cada seccion
//Primera cards seccion buzos (cards)
const buzos0 = new Productos(0,"Buzo de anime0", "",50000,"img/Productos/buzos/buzo-81-5433c6759411df423c16770023870520-640-0.webp")
const buzos1 = new Productos(1,"Buzo de anime1", "",22000,"img/Productos/buzos/goku-narnaja1-7372386244c0b60b5216481429441007-640-0.webp")
const buzos2 = new Productos(2,"Buzo de anime2", "",34000,"img/Productos/buzos/kenjaku-buzo-cfcec92fa452193ac317169348262217-640-0.webp")


//seccion pantalones (cards)
const pantalones3 = new Productos(3,"pantalon de anime3","", 34000,"img/Productos/short/short.webp")
const pantalones4 = new Productos(4,"pantalon de anime4","", 34000,"img/Productos/short/shortbaki.webp")
const pantalones5 = new Productos(5,"pantalon de anime5","", 34000,"img/Productos/short/shortattack.webp")

//seccion remeras (cards)
const remeras7 = new Productos(7,"Remera de anime6","", 34000,"img/Productos/short/shortattack.webp")
const remeras6 = new Productos(6,"Remera de anime7","", 34000,"img/Productos/short/shortattack.webp")
const remeras8 = new Productos(8,"Remera de anime8","", 34000,"img/Productos/short/shortattack.webp")

// SECCION gorras
const gorras9 = new Productos(9,"Remera de anime6","", 34000,"img/Productos/gorras/fantasmita-0aa4408fd417e4e40217200226520991-1024-1024.webp")
const gorras10 = new Productos(10,"Remera de anime6","", 34000,"img/Productos/gorras/honguitos-ea204a8d4b681e841f17200226996326-1024-1024.webp")
const gorras11= new Productos(11,"Remera de anime6","", 34000,"img/Productos/gorras/play-25b7e44cd0f92c04de17200226140086-1024-1024.webp")

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

//en esta funcion agrega el tipo de evento 
function funcionDeEventos(clases, evenetoDelUsuario,evento){
    const nodos = document.getElementById(clases)
    const arrayDeNodos = Array.from(nodos)

    //funcion para recorrer los nodos que estan dentro del arrayDeNodos
    arrayDeNodos.forEach( el =>{
        el.addEventListener(evenetoDelUsuario,evento)
    })

}

//una funcion para agregar el evento al carrito 
function funcionAgregadoraDeEventosAlCarrito(e){
    console.dir(e)
}
funcionDeEventos("click",funcionAgregadoraDeEventosAlCarrito, "click")


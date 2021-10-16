class Cuadernos{
    nombre;
    precio;
    stock;
    constructor (precio, nombre, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    mostrarTexto(){
        document.write(`Cuaderno   ${this.nombre} <br> precio $ ${this.precio} <br> stock ${this.stock} unidades <br><br>` );
    }
}

let CuadernoUno = new Cuadernos (17200, " Tipo Agenda ", 15);
let CuadernoDos = new Cuadernos (4700, " Argollado ", 7);
let CuadernoTres = new Cuadernos (10500, " 5 Materias ", 21);
let CuadernoCuatro = new Cuadernos (4300, " Con Stickers",6);
let CuadernoCinco = new Cuadernos (3500, " Cuadriculado ", 8);
let CuadernoSeis = new Cuadernos (3500, " Rayado ", 3);
CuadernoUno.mostrarTexto();
CuadernoDos.mostrarTexto();
CuadernoTres.mostrarTexto();
CuadernoCuatro.mostrarTexto();
CuadernoCinco.mostrarTexto();
CuadernoSeis.mostrarTexto();
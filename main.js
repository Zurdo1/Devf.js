//1
let div1
let div2
let residuo 

function dividir(){
div1 = prompt("escribir el 23")
div2 = prompt("escribir el 3")
residuo = (parseInt(div1) / parseInt(div2))
document.getElementById("residuoDiv").innerHTML = 'El residuo es '+  residuo;
}


//2
let suma1
let suma2
let suma3
let resSuma

function suma() {
    suma1 = prompt("Escribe el 1° numero")
    suma2 = prompt("Escribe el 2° numero")
    suma3 = prompt("Escribe el 3° numero")
    resSuma = (parseInt(suma1) + parseInt(suma2) + parseInt(suma3))
    document.getElementById("resSuma").innerHTML = 'La suma es '+  resSuma;
}


//3
let nombre
let apellido
let nombreCompleto

function nombreApellido() {
    nombre = prompt("Escribe un nombre")
    apellido = prompt("Escribe tu apellido")
    nombreCompleto = nombre +  ' '+  apellido
    document.getElementById("nombreCompleto").innerHTML = 'Tu nombre completo es ' + nombreCompleto;
}
//4
let peli

function pelicula() {
    peli = prompt("¿cual es tu pelicula favorita?")
    document.getElementById("peliculaFavorita").innerHTML = 'Tu pelicula favorita es ' + peli;
}



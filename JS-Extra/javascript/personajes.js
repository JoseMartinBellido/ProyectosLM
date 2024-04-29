/* ---------------------- Elección de personaje ---------------------- */

// Obtenemos todos los personajes de ricardo
let personajes = document.getElementsByClassName('imagen-ricardo');
let divPersonajes = document.getElementsByClassName('div-ricardos');
let titulosPersonajes = document.getElementsByClassName('titulo-selector-ricardo');

let seleccionado = document.getElementById('ricardo-seleccionado');

// Comprobamos las cookies existentes para establecer directamente el elemento seleccionado
let cookies = document.cookie;
if (cookies !== ''){
    let arrayCookies = cookies.split(';');
    for (let i = 0; i < arrayCookies.length; i++){
        if (arrayCookies[i].includes('ricardo')){
            let numero = Number(arrayCookies[i].split('=')[1]);
            seleccionado.src = personajes[numero].src;
        }
    }
}



//Asignamos el evento a cada ricardo y su div
for (let i = 0; i < personajes.length; i++){
    personajes[i].addEventListener('click', seleccionaRicardo);
    divPersonajes[i].addEventListener('click', seleccionaRicardo);
    titulosPersonajes[i].addEventListener('click', seleccionaRicardo);
}


function seleccionaRicardo(event){
    let pulsado = event.target;
    for (let i = 0; i < personajes.length; i++){
        if (pulsado == personajes[i] || pulsado == divPersonajes[i] || pulsado == titulosPersonajes[i]){
            seleccionado.src = personajes[i].src;
            // Establecemos la cookie
            document.cookie = 'ricardo=' + i;
        }
    }
}

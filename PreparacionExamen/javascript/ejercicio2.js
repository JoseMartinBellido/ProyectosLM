
// Ejercicio 2

const navegacion = document.getElementsByClassName('efectos');

for (let i = 0; i < navegacion.length; i++){
    navegacion[i].addEventListener('mouseover', pasarPorEncima);
    navegacion[i].addEventListener('mouseleave', quitarDeEncima);
    navegacion[i].addEventListener('mousedown', pulsar);
}

// Función que se activa al pasar por encima
function pasarPorEncima(evento){
    let btn = evento.currentTarget;
    btn.style.color = 'blue';
}

// Función que se activa al quitar el ratón de la posición
function quitarDeEncima(evento){
    let btn = evento.currentTarget;
    btn.style.color = 'white';
}

// Función que se activa al pulsar
function pulsar(evento){
    let btn = evento.currentTarget;
    btn.style.color = 'beige';
}

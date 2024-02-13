
// main, nav y div en blanco para ocupar posición
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const enBlanco = document.querySelector('#en-blanco');
let abierto = false;

// Botón para desplegar la navegación emergente
const btnEmergente = document.getElementById('emergente');
const TAMANIO_BTN_EMERGENTE = 80;

// Medidas de la pantalla

let anchoPantalla = main.offsetWidth;
let altoPantalla = main.offsetHeight;

// Establecemos la posición del botón desde javascript 
btnEmergente.style.left = (anchoPantalla - TAMANIO_BTN_EMERGENTE).toString() + 'px';
btnEmergente.style.top = (altoPantalla - 2 * TAMANIO_BTN_EMERGENTE).toString() + 'px';

// Evento en el botón
btnEmergente.addEventListener('click', abreCierraNav);

// Función que abre o cierra la navegación
function abreCierraNav(){
    if (abierto){
        nav.style.display = 'none';
        enBlanco.style.display = 'flex';
        abierto = false;
    } else {
        nav.style.display = 'flex';
        enBlanco.style.display = 'none';
        abierto = true;
    }
}
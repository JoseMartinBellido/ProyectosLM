
/* ---------------------- Elementos de html ---------------------- */

// main, nav y div en-blanco y botones
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const enBlanco = document.querySelector('#en-blanco');
const divBotones = document.querySelector('#botones');

// Botón para desplegar la navegación emergente
const btnEmergente = document.getElementById('emergente');

// Zona de juego
const zonaJuego = document.getElementById('zona-juego');
let altoZonaJuego = zonaJuego.offsetHeight;
let anchoZonaJuego = zonaJuego.offsetWidth;

// Modo discoteca
let discoteca = document.getElementsByClassName('discoteca');

/* ---------------------- Menú emergente de navegación ---------------------- */
let abierto = false;

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

/* ---------------------- Juego ---------------------- */

/* Muros del juego */
const muroGrande = document.getElementById('muro-grande');
muroGrande.style.left = '7vw';
muroGrande.style.top = '7vw';

const muroMediano1 = document.getElementById('muro-mediano-1');
muroMediano1.style.left = '37vw';
muroMediano1.style.top = '18vw';

const muroMediano2 = document.getElementById('muro-mediano-2');
muroMediano2.style.left = '60vw';
muroMediano2.style.top = '6vw';

const muroPequenyo1 = document.getElementById('muro-pequenyo-1');
muroPequenyo1.style.left = '40vw';
muroPequenyo1.style.top = '0vw';

const muroPequenyo2 = document.getElementById('muro-pequenyo-2');
muroPequenyo2.style.left = '60vw';
muroPequenyo2.style.top = '24vw';

/* Bordes de los muros */

const bordesMuros = [muroGrande.getBoundingClientRect(), muroMediano1.getBoundingClientRect(), muroMediano2.getBoundingClientRect(),
    muroPequenyo1.getBoundingClientRect(), muroPequenyo2.getBoundingClientRect()];

/* Ricardo */
const ricardo = document.getElementById('ricardo');
ricardo.style.left = 60 + 'px';
ricardo.style.top = altoZonaJuego - 80 + 'px';

/* Kebab */
const kebab = document.getElementById('kebab');
const tamanyoKebab = 40;

/* Contador */
const contador = document.getElementById('contador');

/* Reset */
const reset = document.getElementById('reset');
// Asignamos el evento al botón
reset.addEventListener('click', resetea);

/* Personajes Ricardo */
let personajes = [];
personajes.push('./images/ricardo.png');
personajes.push('./images/ricarda.png');
personajes.push('./images/ricardios.png');
personajes.push('./images/ricardo-elegante.png');
personajes.push('./images/ricardo-fiestas.png');
personajes.push('./images/ricardo-navidad.png');
personajes.push('./images/ricardo-pelo.png');
personajes.push('./images/ricardo-pixel.png');

// Comprobamos las cookies para saber si hay algún ricardo seleccionado
let cookies = document.cookie;

if (cookies != ''){
    let arrayCookies = cookies.split(';');
    for (let i = 0; i < arrayCookies.length; i++){
        if (arrayCookies[i].includes('ricardo')){
            let numero = Number(arrayCookies[i].split('=')[1]);
            ricardo.src = personajes[numero];
        }
    }
}

/* 
La lógica es la siguiente: Le añado un evento de click a ricardo que solo funciona 1 vez hasta darle a reset.
El evento de click le añade, a su vez, un evento de mousemove que actualiza sus coordenadas con el ratón.
Mientras se mueve ricardo, se calculan los límites y se comprueban colisiones
Si hay colisión, se acaba el juego. Cuando se pasan 2 kebabs sin comérselos, acaba igualmente
*/

/* Variables del juego*/

// Necesitamos de un booleano que indique el fin del juego
//  Mientras ricardo choque contra un muro, tendremos un bucle infinito por colisión
let finJuego = false;

let intervaloTimerKebab;
let timerCaduca;
let generandoKebabs = false;
let tiempo_kebab = 3 * 1000;
let contadorKebabsPerdidos = 0;
let maximo_kebabs_sin_comer = 2;
let contadorKebabs = 0;

let tamanyoRicardo = 30;
const aumento = 7;

let bordeRicardo;
let bordeKebab;

/* Inicio del juego */

ricardo.addEventListener('click', asignaInicio);

// Función que asigna el evento para comenzar el juego
function asignaInicio(){
    main.addEventListener('mousemove',comienzaJuego);
    // Intervalo de aparición de kebabs. Sólo se inician al primer click
    if (!generandoKebabs) {
        generandoKebabs = true;
        generaKebab();
        setTimeout(desapareceKebab, tiempo_kebab - 1000);
        intervaloTimerKebab = setInterval(generaKebab, tiempo_kebab);
    }

}

// Función que comienza el juego y comprueba colisiones
function comienzaJuego(event){

    // Bordes de ricardo
    bordeRicardo = ricardo.getBoundingClientRect();

    // Nueva posición de ricardo solo si no ha perdido ya
    if (!finJuego){
        // Activamos el modo discoteca
        for (let i = 0; i < discoteca.length; i++){
            discoteca[i].style.display = 'inline';
        }
        ricardo.style.left = (event.clientX - divBotones.offsetWidth) + 'px';
        ricardo.style.top = (event.clientY - divBotones.offsetTop - (ricardo.offsetHeight / 2)) + 'px'; 

    }

    // Comprobamos si hay colisión con los bordes o los muros
    compruebaColision(event);

    // Comprobamos si hay colisión con el kebab
    comeKebab();
}

function compruebaColision(event){
    // Comprobamos los bordes de la zona de juego
    if (ricardo.offsetTop <= 0 || (ricardo.offsetTop + tamanyoRicardo) >= altoZonaJuego
        || ricardo.offsetLeft <= 0 || (ricardo.offsetLeft + tamanyoRicardo) >= anchoZonaJuego){
        // Si el juego no ha acabado ya, finalizamos
        if (!finJuego){
            finalizaJuego(event);
        }

    } else {
        // Comprobamos nuestro array de bordes de los muros. 
        for (let i = 0; i < bordesMuros.length; i++){

            let borde = bordesMuros[i];
    
            if (bordeRicardo.top <= borde.bottom && bordeRicardo.left <= borde.right
                && bordeRicardo.bottom >= borde.top && bordeRicardo.right >= borde.left){
                    if (!finJuego){
                        finalizaJuego(event);
                    }
        
                }
        }
    }
}

// Función que se encarga de finalizar el juego
function finalizaJuego(){
    // Aviso al usuario
    alert('Ricardo se ha desmayado. No se despertará hasta mañana. Pero oye, ¡sus buenos ' + contadorKebabs + ' que se ha comido!');
    alert('Pulsa el botón de reset para volver a jugar.');
    // Cambio de variable fin del juego
    finJuego = true;
    // Dejamos de arrastrar a ricardo por pantalla
    main.removeEventListener('mousemove', comienzaJuego);
    // Paramos de mostrar kebabs
    clearInterval(intervaloTimerKebab);
    // Quitamos el kebab y su Timeout
    clearTimeout(desapareceKebab);
    kebab.style.display = 'none';
    // Ocultamos el modo discoteca
    for (let i = 0; i < discoteca.length; i++){
        discoteca[i].style.display = 'none';
    }
}

function generaKebab(){

    // Lo añadimos a los kebabs perdidos y lo quitamos si se come
    contadorKebabsPerdidos++;
    console.log(contadorKebabsPerdidos);
    if (contadorKebabsPerdidos == maximo_kebabs_sin_comer + 1){
        finalizaJuego();
    }
    
    let kebabCorrecto = true;

    do{ 
        // el kebab es correcto de inicio y, si hay colisión, será false
        kebabCorrecto = true;

        kebab.style.left = Math.round(Math.random() * (anchoZonaJuego - (tamanyoKebab * 1.5))) + 'px';
        kebab.style.top = Math.round(Math.random() * (altoZonaJuego - (tamanyoKebab * 1.5))) + 'px';

        kebab.style.display = 'block';

        // Comprobamos 1 a 1 los bordes del juego para generar el kebab
        for (let i = 0; i < bordesMuros.length; i++){
            bordeKebab = kebab.getBoundingClientRect();
            let borde = bordesMuros[i];

            if (bordeKebab.top <= borde.bottom && bordeKebab.left <= borde.right
                && bordeKebab.bottom >= borde.top && bordeKebab.right >= borde.left){
                    // Comprobamos la posición del kebab. Si no hay colisión con nada, es correcto
                    kebabCorrecto = false; 
            }
        }

    } while (!kebabCorrecto);

    // Cuando sea correcto, se muestra en pantalla y se establece el intervalo

    timerCaduca = setTimeout(desapareceKebab, tiempo_kebab - 1000); 
}

function desapareceKebab(event){
    kebab.style.display = 'none';
}

/* Función para cuando hay colisión con el kebab */

function comeKebab(){
    bordeKebab = kebab.getBoundingClientRect();
    bordeRicardo = ricardo.getBoundingClientRect();

    // Comprobamos la colisión de bordes
    if (bordeRicardo.top <= bordeKebab.bottom && bordeRicardo.left <= bordeKebab.right
        && bordeRicardo.bottom >= bordeKebab.top && bordeRicardo.right >= bordeKebab.left){
        
        // En caso correcto, quitamos el kebab y su Timeout
        kebab.style.display = 'none';
        clearTimeout(desapareceKebab);

        // Añadimos la puntuación al contador de puntos
        let arrayTextoContador = contador.textContent.split(':'); 
        // Desglosamos el texto para quedarnos con el número y sumar la puntuación nueva
        let puntuacion = Number(arrayTextoContador[1].substring(1, arrayTextoContador[1].length - 4)) + 25;
        contador.textContent = arrayTextoContador[0] + ': ' + puntuacion + ' pts';

        // Aumentamos la cantidad de kebabs comidos
        contadorKebabs++;
        // Restablecemos el de los perdidos para no acumular
        contadorKebabsPerdidos = 0;
        // Si la puntuación es 100, 200 o 300, aumentamos a ricardo
        if (puntuacion == 100 || puntuacion == 200 || puntuacion == 300){
            ricardo.style.width = (ricardo.offsetWidth + aumento) + 'px';
            ricardo.style.height = (ricardo.offsetHeight + aumento) + 'px';
            tamanyoRicardo += aumento;

        // Si la puntuación es mayor a 500, tendremos medio segundo menos para conseguir el kebab
        } else if (puntuacion == 500){
            clearInterval(intervaloTimerKebab);
            intervaloTimerKebab = setInterval(generaKebab, tiempo_kebab - 600);
        }
    }
}

/* Función del botón de reset */

function resetea(event){
    finJuego = true;

    // Ocultamos el modo discoteca
    for (let i = 0; i < discoteca.length; i++){
        discoteca[i].style.display = 'none';
    }

    // Dejamos de arrastrar a ricardo por pantalla
    main.removeEventListener('mousemove', comienzaJuego);

    // Paramos de mostrar kebabs
    clearInterval(intervaloTimerKebab);

    // Quitamos el kebab y su Timeout
    clearTimeout(desapareceKebab);
    kebab.style.display = 'none';

    // Reiniciamos el contador de puntos y el número de kebabs
    contador.textContent = contador.textContent.split(':')[0] + ': 0 pts';
    contadorKebabs = 0;

    // Reiniciamos la posición de Ricardo y su tamaño
    let tamanyoRicardo = 30;
    ricardo.style.left = 60 + 'px';
    ricardo.style.top = altoZonaJuego - 80 + 'px';

    ricardo.style.width = tamanyoRicardo + 'px';
    ricardo.style.height = tamanyoRicardo + 'px';

    // Reiniciamos las variables para kebabs y colisiones
    generandoKebabs = false;
    finJuego = false;
    contadorKebabsPerdidos = 0;
}





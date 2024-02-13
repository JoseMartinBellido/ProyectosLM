
/* ---------------------- Elementos de html ---------------------- */

// main, nav y div en-blanco
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const enBlanco = document.querySelector('#en-blanco');

// Botón para desplegar la navegación emergente
const btnEmergente = document.getElementById('emergente');

// Zona de juego
const zonaJuego = document.getElementById('zona-juego');
let altoZonaJuego = zonaJuego.offsetHeight;
let anchoZonaJuego = zonaJuego.offsetWidth;

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
muroGrande.style.left = '6.5vw';
muroGrande.style.top = '6.5vw';

const muroMediano1 = document.getElementById('muro-mediano-1');
muroMediano1.style.left = '35vw';
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
ricardo.style.left = 20 + 'px';
ricardo.style.top = altoZonaJuego - 60 + 'px';
let tamanyoRicardo = 30;

/* Kebab */
const kebab = document.getElementById('kebab');
let tamanyoKebab = 40;

/* Contador */
const contador = document.getElementById('contador');

/* 
La lógica es la siguiente: Le añado un evento de click a ricardo que solo funciona 1 vez hasta darle a reset.
El evento de click le añade, a su vez, un evento de mousemove que actualiza sus coordenadas con el ratón.
Mientras se mueve ricardo, se calculan los límites y se comprueban colisiones
Si hay colisión, se acaba el juego
*/

/* Variables del juego*/
let finJuego = false;
let intervaloTimerKebab;
let timerCaduca;
let generandoKebabs = false;
let tiempo_kebab = 4 * 1000;

let contadorKebabs = 0;

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

// Función que comienza el juego (y lo finaliza con una colisión)
function comienzaJuego(event){
    // Bordes de ricardo
    bordeRicardo = ricardo.getBoundingClientRect();

    // Nueva posición de ricardo
    ricardo.style.left = 'calc( ' + event.clientX + 'px - 10vw)';
    ricardo.style.top = 'calc( ' + event.clientY + 'px - 17vh)';;

    // Comprobamos nuestro array de bordes de los muros. Además, comprobamos los bordes de la zona de juego
    if (ricardo.offsetTop <= 0 || (ricardo.offsetTop + tamanyoRicardo) >= altoZonaJuego
        || ricardo.offsetLeft <= 0 || (ricardo.offsetLeft + tamanyoRicardo) >= anchoZonaJuego){

        if (!finJuego){
            finalizaJuego(event);
        }

    } else {
        for (let i = 0; i < bordesMuros.length; i++){

            let borde = bordesMuros[i];
    
            if (bordeRicardo.top <= borde.bottom && bordeRicardo.left <= borde.right
                && bordeRicardo.bottom >= borde.top && bordeRicardo.right >= borde.left){
                    // Necesitamos de un booleano que indique el fin del juego
                    //  Mientras ricardo choque contra un muro, tendremos un bucle infinito por colisión
                    if (!finJuego){
                        finalizaJuego(event);
                    }
        
                }
        }
    }

    // Comprobamos si hay colisión con el kebab
    comeKebab();
}

// Función que se encarga de finalizar el juego
function finalizaJuego(event){
    // Aviso al usuario
    alert('Ricardo se ha desmayado. No se despertará hasta mañana. Pero oye, ¡sus buenos ' + contadorKebabs + ' que se ha comido!');
    alert('Pulsa el botón de reset para volver a jugar.');
    finJuego = true;
    // Dejamos de arrastrar a ricardo por pantalla
    main.removeEventListener('mousemove', comienzaJuego);
    // Paramos de mostrar kebabs
    clearInterval(intervaloTimerKebab);
}

function generaKebab(){
    let kebabCorrecto = true;
    do{ 
        // el kebab es correcto de inicio y, si hay colisión, será false
        kebabCorrecto = true;

        kebab.style.left = Math.round(Math.random() * (anchoZonaJuego - tamanyoKebab)) + 'px';
        kebab.style.top = Math.round(Math.random() * (altoZonaJuego - tamanyoKebab)) + 'px';

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

function desapareceKebab(){
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
        contador.textContent = arrayTextoContador[0] + ': ' 
            + puntuacion + ' pts';
        // Aumentamos la cantidad de kebabs comidos
        contadorKebabs++;
        // Si la puntuación es 100, 200 o 300, aumentamos a ricardo
        if (puntuacion == 100 || puntuacion == 200 || puntuacion == 300){
            ricardo.style.width = (ricardo.offsetWidth + 6) + 'px';
            ricardo.style.height = (ricardo.offsetHeight + 6) + 'px';
        }
        // Si la puntuación es mayor a 500, tendremos medio segundo menos para conseguir el kebab
        if (puntuacion == 500){
            tiempo_kebab = 3200;
            clearInterval(intervaloTimerKebab);
            intervaloTimerKebab = setInterval(generaKebab, tiempo_kebab);
        }

    }

}

/* Función del botón de reset */

function resetea(event){
    finJuego = true;
    // Dejamos de arrastrar a ricardo por pantalla
    main.removeEventListener('mousemove', comienzaJuego);

    // Paramos de mostrar kebabs
    clearInterval(intervaloTimerKebab);

    // Quitamos el kebab y su Timeout
    kebab.style.display = 'none';
    clearTimeout(desapareceKebab);

    // Reiniciamos el contador de puntos y el número de kebabs
    contador.textContent = contador.textContent.split(':')[0] + ': 0 pts';
    contadorKebabs = 0;

    // Reiniciamos la posición de Ricardo y su tamaño
    ricardo.style.left = 20 + 'px';
    ricardo.style.top = altoZonaJuego - 60 + 'px';
    let tamanyoRicardo = 30;

    // Reiniciamos las variables para kebabs y colisiones
    generandoKebabs = false;
    finJuego = false;
}

// Asignamos el evento al botón
reset.addEventListener('click', resetea);
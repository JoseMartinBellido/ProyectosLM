
// main, o zona de juego
const zonaJuego = document.querySelector('main');
let altoZona = zonaJuego.offsetHeight;
let anchoZona = zonaJuego.offsetWidth;

// Tamaño máximo de las imágenes
const anchoMayorImagenes = 256;
const altoMayorImagenes = 256;

//Cantidad de imágenes
const CANTIDAD_IMAGENES = 5;
const VELOCIDAD_IMAGEN = 700;
const TIEMPO_JUEGO = 20;

// Imagen
let img = document.createElement('img');
zonaJuego.appendChild(img);

// Contador
const contador = document.querySelector('#contador');

// Botón de inicio y boolean de comprobación del juego
const inicio = document.querySelector('#inicio');
let estaFuncionando = false;

// Botón de reset
const reset = document.querySelector('#reset');

// Intervalo y parada
let intervaloJuego;
let parada;

// Cronómetro de tiempo
const cronometro = document.querySelector('#cronometro');

// Establecemos el tiempo del cronómetro al tiempo inicial de segundos
let tiempoCronometro = cronometro.textContent;
cronometro.textContent = tiempoCronometro.split(':')[0] + ': ' + TIEMPO_JUEGO.toString() +'s';

let intervaloTiempoRestante;

// Eventos de imágenes
img.addEventListener('click',clickImagen);

// Eventos de botones
inicio.addEventListener('click', comienza);
reset.addEventListener('click', resetea);


// Función para agregar una imagen a pantalla
function agregaImagen(){
    // Elegimos una imagen al azar con un número entre el 1 y el 5
    let numImagen = Math.round((Math.random() * (CANTIDAD_IMAGENES - 1)) + 1);
    // Elegimos una posición al azar en el main de forma que la imagen no salga fuera de la pantalla
    let coordenadaX = Math.round(Math.random() * (anchoZona - altoMayorImagenes));
    let coordenadaY = Math.round(Math.random() * (altoZona - altoMayorImagenes));

    // Añadimos los atributos a la imagen
    img.src = `../images/juego-imagenes-${numImagen}.jpg`;
    img.style.position = 'absolute';
    img.style.left = coordenadaX.toString() + 'px';
    img.style.top = coordenadaY.toString() + 'px';
    img.style.display = 'block';
}

// Función para eliminar una imagen concreta de la pantalla
function eliminaImagen() {
    img.style.display = 'none';
    
}

// Función para cuando se hace click sobre una imagen
function clickImagen(){

    // Modificamos el contador. Separamos el texto por el carácter : y modificamos el lado derecho (el número)
    let texto = contador.textContent;
    contador.textContent = texto.split(':')[0] + ': ' + (Number(texto.split(':')[1]) + 1).toString();
    
    eliminaImagen();
}

// Función para mostrar la puntuación
function muestraPuntuacion(){
    let texto = contador.textContent;
    contador.textContent = texto.split(':')[0] + ': 0';
    eliminaImagen();
    return Number(texto.split(':')[1]).toString();
}

// Función para resetear el juego
function resetea(){
    clearInterval(intervaloJuego);
    clearTimeout(parada);
    clearInterval(intervaloTiempoRestante);
    alert('FIN DEL JUEGO');

    // Modificamos el contador. Separamos el texto por el carácter : y modificamos el lado derecho (el número)
    let texto = contador.textContent;
    contador.textContent = texto.split(':')[0] + ': 0';

    // Establecemos el tiempo del cronómetro al tiempo inicial de segundos
    let tiempoCronometro = cronometro.textContent;
    cronometro.textContent = tiempoCronometro.split(':')[0] + ': ' + TIEMPO_JUEGO.toString() +'s';

    eliminaImagen();
    estaFuncionando = false;
}

// Función para comenzar el juego
function comienza(){

    // Solo comienza si no está funcionando ya
    if (!estaFuncionando){
        // Creación de imagen en un intervalo determinado
        intervaloJuego = setInterval(agregaImagen, VELOCIDAD_IMAGEN);

        // Establecemos el tiempo del cronómetro al tiempo inicial de segundos
        let tiempoCronometro = cronometro.textContent;
        cronometro.textContent = tiempoCronometro.split(':')[0] + ': ' + TIEMPO_JUEGO.toString() +'s';

        // Se crea el intervalo de funcionamiento del cronómetro
        intervaloTiempoRestante = setInterval(pasaUnSegundo, 1000);

        // Parada del juego
        parada = setTimeout(() => {
            clearInterval(intervaloJuego);
            clearInterval(intervaloTiempoRestante);
            alert('FIN DEL JUEGO. Clicks: ' + muestraPuntuacion());
            }, TIEMPO_JUEGO * 1000);

        estaFuncionando = true;
        }

}

// Función que cuenta el tiempo restante
function pasaUnSegundo(){
    // Nos quedamos con el texto existente en el cronómetro y buscamos los segundos de juego
    let tiempoCronometro = cronometro.textContent;
    let tiempoRestante = Number(tiempoCronometro.split(':')[1].substring(1, tiempoCronometro.split(':')[1].length - 1));

    // Establecemos el tiempo restante
    cronometro.textContent = tiempoCronometro.split(':')[0] + ': ' + (tiempoRestante - 1).toString() +'s';
}

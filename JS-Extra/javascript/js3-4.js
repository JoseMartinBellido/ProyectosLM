
// Buscamos la imagen del coche y añadimos sus medidas
const coche = document.getElementById('coche');
const altoCoche = 33;
const anchoCoche = 45;
const velocidad = 10;
const mensajeChoque = 'Accidente detectado. Llamando a una ambulancia.'.toUpperCase();

// Buscamos la imagen del muro y añadimos sus medidas
const muro = document.getElementById('muro');
const altoMuro = 97;
const anchoMuro = 93;
const posicionMuroLeft = muro.offsetLeft;
const posicionMuroTop = muro.offsetTop;

// Bordes del muro
const limiteMuro = muro.getBoundingClientRect();

// Botón de reset
const reset = document.getElementById('reset');
reset.addEventListener('click', resetea);

// Establecemos el lugar de juego
const zonaJuego = document.querySelector('main');
let altoZona = zonaJuego.offsetHeight;
let anchoZona = zonaJuego.offsetWidth;

// Creamos un array con las flechas
let movimientos = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

// Añadimos el evento al documento
document.addEventListener('keydown', mueveCoche);

// Función que mueve el coche
function mueveCoche(event){
    // Obtenemos la tecla presionada
    let teclaPresionada = event.key;
    // Si la tecla presionada es alguna de los 4 movimientos de flecha, recalculamos la posición del coche
    // La posición del coche la obtenemos desde la parte superior izquierda de la imagen, dato a tener en cuenta 
    // en los cálculos de los bordes del mapa
    if (teclaPresionada == movimientos[0]){
        // Calculamos el número de la distancia al elemento superior (nav)
        let distanciaTop = coche.offsetTop;
        // Si chocamos con los límites o con el muro, se acaba la partida
        coche.style.top = (distanciaTop - velocidad).toString() + 'px';

        if (distanciaTop - velocidad <= 0 || compruebaChoque()){
            alert(mensajeChoque);
            document.removeEventListener('keydown', mueveCoche);
        }
        
    } else if (teclaPresionada == movimientos[1]){
        // Hacia la izquierda hacemos el mismo cálculo anterior
        let distanciaLeft = coche.offsetLeft;

        coche.style.left = (distanciaLeft - velocidad).toString() + 'px';
        if (distanciaLeft - velocidad <= 0 || compruebaChoque()) {
            alert(mensajeChoque);
            document.removeEventListener('keydown', mueveCoche);
        }


    // Para la derecha y abajo, influye el tamaño del coche
    } else if (teclaPresionada == movimientos[2]){
        let distanciaTop = coche.offsetTop;

        coche.style.top = (distanciaTop + velocidad).toString() + 'px';
        if (distanciaTop + altoCoche + velocidad >= altoZona || compruebaChoque()) {
            alert(mensajeChoque);
            document.removeEventListener('keydown', mueveCoche);
        } 


    } else if (teclaPresionada == movimientos[3]){
        let distanciaLeft = coche.offsetLeft;

        coche.style.left = (distanciaLeft + velocidad).toString() + 'px';
        if (distanciaLeft + anchoCoche + velocidad >= anchoZona || compruebaChoque()) {
            alert(mensajeChoque);
            document.removeEventListener('keydown', mueveCoche);
        }

    }
}

function resetea(){
    coche.style.left = '10px';
    coche.style.top = '10px';
    document.addEventListener('keydown', mueveCoche); 
}

// COMPROBACIÓN DE CHOQUE MÁS EFICIENTE CON FUNCIONES DE JAVASCRIPT

function compruebaChoque() {
    // Averiguamos la posición del coche
    let limiteCoche = coche.getBoundingClientRect();

    // Buscamos coincidencias de nuestro objeto con el muro. Cuando se den las siguientes circunstancias, ha ocurrido una colisión
        return (limiteCoche.top <= limiteMuro.bottom && limiteCoche.left <= limiteMuro.right
            && limiteCoche.bottom >= limiteMuro.top && limiteCoche.right >= limiteMuro.left);

}

// COMPROBACIÓN DE CHOQUE POCO EFICIENTE PERO HECHO CON LO VISTO EN CLASE

// La comprobación de coches la vamos a hacer mediante matrices de posición ancho x alto contando con los bordes de los objetos
/* // Rellenamos un array con los píxeles que ocupa el muro en el borde exterior
const pixelesMuro = [];
for (let i = posicionMuroLeft; i <= posicionMuroLeft + anchoMuro; i++){
    for (let j = posicionMuroTop; j <= posicionMuroTop + altoMuro; j++){
        if (i == posicionMuroLeft || i == posicionMuroLeft + anchoMuro || j == posicionMuroTop ||j == posicionMuroTop + altoMuro){
            pixelesMuro.push([i,j].toString());
        }

    }
}
 */
/* function compruebaChoque() {
    let pixelesCoche = [];
    for (let i = coche.offsetLeft; i <= coche.offsetLeft + anchoCoche; i++){
        for (let j = coche.offsetTop; j <= coche.offsetTop + altoCoche; j++){
            if (i == coche.offsetLeft || i == coche.offsetLeft + anchoCoche || j == coche.offsetTop ||j == coche.offsetTop + altoCoche) {
                pixelesCoche.push([i,j].toString());
            }

        }
    }
    // Comprobamos si alguna de las coordenadas del coche coincide con alguna del muro. En caso de que lo haga, ha habido un choque
    // Como no se pueden comparar arrays directamente, se transforman en string para ello
    for (let i = 0; i < pixelesCoche.length; i++) {
        for (let j = 0; j < pixelesMuro.length; j++) {
            if (pixelesCoche[i] == pixelesMuro[j]) {
                return true;
            }
        }
    }

    return false;
} */
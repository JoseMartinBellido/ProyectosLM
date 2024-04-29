
// Ejercicio 1

// Apartado 1. Solicitamos número y rellenamos array
let limiteSuperior;
let valorCorrecto = false;

// Se solicita el número hasta tener uno correcto
solicitaNumero();

function solicitaNumero(){
    do {
        limiteSuperior = prompt("Introduzca un valor numérico por pantalla (entre 1 y 20)");
    
        // Si el número introducido no es vacío y es número
        if (limiteSuperior !== "" && !isNaN(Number(limiteSuperior))){
    
            limiteSuperior = Number(limiteSuperior);
            // Si cumple el rango entre 1 y 20, el valor es correcto
            if (limiteSuperior >= 1 && limiteSuperior <= 20) {
                valorCorrecto = true;
            } else {
                alert("El número no cumple el requisito de rango. Introduzca de nuevo el número.")
            }
        } else {
            alert("Valor introducido con formato incorrecto. Introduzca de nuevo el número.")
        }
    
    } while (!valorCorrecto);
}

// Llegados aquí, el valor es correcto

let aleatorios = [];
// Generamos 250 números aleatorios
for (let i = 0; i < 250; i++){
    let numAleatorio = Math.random() * limiteSuperior; 
    aleatorios.push(numAleatorio);
}

// Apartado 2. Recorremos array y separamos valores

let limiteSuperiorRangoMacho = 0.45 * limiteSuperior;
let limiteInferiorRangoHembra = limiteSuperior - (0.45 * limiteSuperior);

// Arrays y función flecha
let valoresMacho = [];
let valoresHembra = [];
let valoresIndefinidos = [];

let filtraDatos = num => {
    if(num <= limiteSuperiorRangoMacho){

        valoresMacho.push(num);

    } else if (num >= limiteInferiorRangoHembra){
        valoresHembra.push(num);
    
    } else {
        valoresIndefinidos.push(num);
    }
}

for (let i = 0; i < aleatorios.length; i++){
    // Se redondea a 2 decimales por comodidad para verlos
    aleatorios[i] = Math.round(aleatorios[i] * 100) / 100;
    filtraDatos(aleatorios[i]);
}

// Imprimimos los resultados
alert("Valores por debajo del 45% (macho): " + valoresMacho + "\nValores indefinidos: " + valoresIndefinidos 
+ "\nValores en el 45% superior (hembra): " + valoresHembra);


// Apartado 3: Se realizan 3 veces los apartados anteriores y se determina el resultado
let resultadosMacho = 0;
let resultadosIndefinido = 0;
let resultadosHembra = 0;

for (let i = 0; i < 3; i++) {

    // Se solicita el número hasta tener uno correcto
    solicitaNumero();

    aleatorios = [];
    // Generamos 250 números aleatorios
    for (let i = 0; i < 250; i++){
        let numAleatorio = Math.random() * limiteSuperior; 
        aleatorios.push(numAleatorio);
    }

    limiteSuperiorRangoMacho = 0.45 * limiteSuperior;
    limiteInferiorRangoHembra = limiteSuperior - (0.45 * limiteSuperior);

    // Arrays
    valoresMacho = [];
    valoresHembra = [];
    valoresIndefinidos = [];

    for (let i = 0; i < aleatorios.length; i++){
        filtraDatos(aleatorios[i]);
    }

    // Comprobamos el resultado final del estudio
    let numMacho = valoresMacho.length;
    let numHembra = valoresHembra.length;
    let numIndefinido = valoresIndefinidos.length;

    // Si es macho, su array tendrá una longitud mayor al resto
    if (numMacho > numHembra && numMacho > numIndefinido) {
        resultadosMacho++;

    // Si es hembra, su array tendrá una longitud mayor al resto
    } else if (numHembra > numMacho && numHembra > numIndefinido){
        resultadosHembra++;
    // En cualquier otro caso (igualdad entre machos y hembras, o mayor número de indefinidos), el valor es indefinido
    } else {
        resultadosIndefinido++;
    }
}

// Llegados aquí, sabemos el número de resultados de cada estudio
let resultadoFinal;

// Comparamos casos según la tabla dada en el ejercicio
if (resultadosMacho == 3 || (resultadosMacho == 2 && resultadosHembra == 1)) {
    resultadoFinal = "macho";

} else if (resultadosHembra == 3 || (resultadosHembra == 2 && resultadosMacho == 1)) {
    resultadoFinal = "hembra";

} else {
    resultadoFinal = "indefinido";
}

alert("El resultado completo del estudio es: " + resultadoFinal);

// Ejercicio 2

// Se establece el color, titulo e imagen de la cabecera
let cabecera = document.getElementById('cabecera');
let titulo = document.querySelector('header h1');
let imagen = document.querySelector('header img');

titulo.textContent = (titulo.textContent + resultadoFinal).toUpperCase();

// Botón cambio de color (Apartado 1)
let btnCambioColor = document.getElementById('color-change');
btnCambioColor.addEventListener('click', cambiaColor);
btnCambioColor.addEventListener('mouseover', pasarPorEncima);
btnCambioColor.addEventListener('mouseleave', salirDeEncima);
btnCambioColor.addEventListener('mousedown', pulsando);

// Botón cambio de imagen (Apartado 2)
let btnCambioImagen = document.getElementById('image-change');
btnCambioImagen.addEventListener('click', cambiaImagen);
btnCambioImagen.addEventListener('mouseover', pasarPorEncima);
btnCambioImagen.addEventListener('mouseleave', salirDeEncima);
btnCambioImagen.addEventListener('mousedown', pulsando);

// Botón change (Apartado 3)
let btnChange = document.querySelectorAll('main button')[2];
btnChange.addEventListener('click', cambiaTexto10Seg);
btnChange.addEventListener('mouseover', pasarPorEncima);
btnChange.addEventListener('mouseleave', salirDeEncima);
btnChange.addEventListener('mousedown', pulsando);

// Función de cambio de color
function cambiaColor(){
    let color;
    if (resultadoFinal == "macho"){
        color = "azure";
    } else if (resultadoFinal == "hembra"){
        color = "pink";
    } else {
        color = "grey";
    }
    cabecera.style.backgroundColor = color;
    titulo.style.color = "brown";
}

// Función de cambio de imagen
function cambiaImagen(){
    let source;
    if (resultadoFinal == "macho"){
        source = "./images/usb-macho.jpg";
    
    } else if (resultadoFinal == "hembra"){
        source = "./images/usb-hembra.png";
    
    } else {
        source = "./images/cable-indefinido.png";
    }
    imagen.src = source;
}

// Función de cambio de texto a los 10 segundos y no cambie más
function cambiaTexto10Seg(){
    setTimeout(() => titulo.style.color = 'blue', 10 * 1000);
}

// Función de pasar por encima de un botón
function pasarPorEncima(evento){
    let pulsado = evento.target;
    pulsado.style.backgroundColor = 'red';
}

function salirDeEncima(evento){
    let pulsado = evento.target;
    pulsado.style.backgroundColor = 'white';
}

function pulsando(evento){
    let pulsado = evento.target;
    pulsado.style.backgroundColor = 'blue';
}

// Apartado 4 - contador

// texto y botones
let textoContador = document.getElementById('contador');
let btnInicio = document.getElementById('iniciar-contador');
let btnParada = document.getElementById('parar-contador');
let btnReset = document.getElementById('reset-contador');

let funcionando = false;
let timer;

// Botón de inicio
btnInicio.addEventListener('click', iniciaContador);
btnInicio.addEventListener('mouseover', pasarPorEncima);
btnInicio.addEventListener('mouseleave', salirDeEncima);
btnInicio.addEventListener('mousedown', pulsando);


// Botón de parada / vuelta a iniciar
btnParada.addEventListener('click', paraInicia);
btnParada.addEventListener('mouseover', pasarPorEncima);
btnParada.addEventListener('mouseleave', salirDeEncima);
btnParada.addEventListener('mousedown', pulsando);


// Botón de reset
btnReset.addEventListener('click', reset);
btnReset.addEventListener('mouseover', pasarPorEncima);
btnReset.addEventListener('mouseleave', salirDeEncima);
btnReset.addEventListener('mousedown', pulsando);


// Función que inicia el contador
function iniciaContador(){
 if(!funcionando){
    timer = setInterval(cuenta, 1000);
    funcionando = true;
 }
}

// Función botón de parada / inicio de parada
function paraInicia(){
    if (!funcionando) {
        timer = setInterval(cuenta, 1000);
        funcionando = true;
    } else {
        clearInterval(timer);
        funcionando = false;
    }
}

// Función que cuenta 1 segundo
function cuenta(){
    let tiempoActual = Number(textoContador.textContent);
    textoContador.textContent = (tiempoActual + 1).toString();
}

// Función que resetea el contador
function reset(){
    textoContador.textContent = 0;
    clearInterval(timer);
    funcionando = false;
}
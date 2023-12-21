let btnRojo = document.getElementById('btnrojo');
let btnVerde = document.getElementById('btnverde');
let btnAzul = document.getElementById('btnazul');
let btnAmarillo= document.getElementById('btnamarillo');
let btnReset = document.getElementById('btnreset');
let box = document.querySelector('.box');

const colorRojo = "#FF0000";
const colorVerde = "#00FF00";
const colorAzul = "#0000FF";
const colorAmarillo = "#FFFF00";
const colorNegro = "#000000";
const colorRosa = "#FF00FF";


function setColorRojo() {
    box.style.background = colorRojo;
    btnRosa.style.color = colorNegro;
    btnAmarillo.style.color = colorNegro;
    btnAzul.style.color = colorNegro;
    btnRojo.style.color = colorRojo;
    btnVerde.style.color = colorNegro;
}

function setColorVerde() {
  box.style.background = colorVerde;
  btnRosa.style.color = colorNegro;
  btnAmarillo.style.color = colorNegro;
  btnAzul.style.color = colorNegro;
  btnRojo.style.color = colorNegro;
  btnVerde.style.color = colorVerde;
}

function setColorAzul() {
  box.style.background = colorAzul;
  btnRosa.style.color = colorNegro;
  btnAmarillo.style.color = colorNegro;
  btnAzul.style.color = colorAzul;
  btnRojo.style.color = colorNegro;
  btnVerde.style.color = colorNegro;
}

function setColorAmarillo() {
  box.style.background = colorAmarillo;
  btnRosa.style.color = colorNegro;
  btnAmarillo.style.color = colorAmarillo;
  btnAzul.style.color = colorNegro;
  btnRojo.style.color = colorNegro;
  btnVerde.style.color = colorNegro;
}

function setColorReset() {
  box.style.background = colorNegro;
  btnRosa.style.color = colorNegro;
  btnAmarillo.style.color = colorNegro;
  btnAzul.style.color = colorNegro;
  btnRojo.style.color = colorNegro;
  btnVerde.style.color = colorNegro;
}

// Apartado 1.a. Funcionalidad del nuevo botón
let btnRosa = document.getElementById('btnrosa');
function setColorRosa(){
  box.style.background = colorRosa;
  btnRosa.style.color = colorRosa;
  btnAmarillo.style.color = colorNegro;
  btnAzul.style.color = colorNegro;
  btnRojo.style.color = colorNegro;
  btnVerde.style.color = colorNegro;
}

// Refactorización del ejercicio. Eventos de click en los botones
btnRojo.addEventListener('click', () => setColorRojo());
btnAzul.addEventListener('click', () => setColorAzul());
btnAmarillo.addEventListener('click', () => setColorAmarillo());
btnVerde.addEventListener('click', () => setColorVerde());
btnRosa.addEventListener('click', () => setColorRosa());

// Apartado 1.b. Añadimos un párrafo desde js
const texto = document.createElement('P');
texto.textContent = 'Este es un nuevo párrafo añadido.';
texto.classList.add('texto');

const contenido = document.querySelector('.contenido');
contenido.appendChild(texto);


/*
1. En el ejemplo de la plataforma:
d. Añadir una imagen y cambiarla cuando se pulse algún botón
e. Cambiar el color del título cuando se pulse algún botón, poniéndolo del color
del botón que se pulse.
2. Añadir en la página facilitada un reloj que visualice la hora, la fecha actual y el día de la
semana.
3. Añadir una función que cada 3 minutos lance una pregunta si quiere continuar en la
página o no quiere continuar. En el caso de no querer continuar, redirigirá la página a
la página que desees.
4. Hacer un cuadro en la página que indique su ancho y su alto y si este cambia, que esos
cambios se vean reflejados.*/
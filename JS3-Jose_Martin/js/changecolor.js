
let btnRojo = document.getElementById('btnrojo');
let btnVerde = document.getElementById('btnverde');
let btnAzul = document.getElementById('btnazul');
let btnAmarillo = document.getElementById('btnamarillo');
let btnReset = document.getElementById('btnreset');
let box = document.querySelector('.box');


const colorRojo = "#FF0000";
const colorVerde = "#00FF00";
const colorAzul = "#0000FF";
const colorAmarillo = "#FFFF00";
const colorNegro = "#000000";
const colorRosa = "#FF00FF";

// ------------------ Ejercicio 1. Añadiendo botones y funcionalidades ------------------

// Apartado 1.a. Funcionalidad del nuevo botón
let btnRosa = document.getElementById('btnrosa');

// Metemos los botones y colores en un array para poder trabajar con ellos más facilmente
let botones = [btnRojo, btnVerde, btnAzul, btnAmarillo, btnReset, btnRosa];
let colores = [colorRojo, colorVerde, colorAzul, colorAmarillo, colorNegro, colorRosa];

let mapColoresRGB = new Map();
mapColoresRGB.set("rgb(255, 0, 0)", colorRojo);
mapColoresRGB.set('rgb(0, 255, 0)', colorVerde);
mapColoresRGB.set('rgb(0, 0, 255)', colorAzul);
mapColoresRGB.set('rgb(255, 255, 0)', colorAmarillo);
mapColoresRGB.set('rgb(0, 0, 0)', colorNegro);
mapColoresRGB.set('rgb(255, 0, 255)', colorRosa);

// Nueva imagen insertada
const imagenNueva = document.getElementById("imagen");

// Nuevo títutlo de la página web insertado
const titulo = document.querySelector("h1");

// Función que establece el color del botón al hacer click
function setColor(evento) {
  // Encontramos el botón y color seleccionados
  let btnSeleccionado = botones.find(element => element == evento.currentTarget);
  let colorSeleccionado = colores[(botones.indexOf(btnSeleccionado))];

  // Una vez encontrados, modificamos las propiedades de estilo:
  box.style.background = colorSeleccionado;
  for (let btn of botones) {
    if (btn == btnSeleccionado) btn.style.color = colorSeleccionado;
    else btn.style.color = colorNegro;
  }
  imagenNueva.style.borderColor = colorSeleccionado;
  titulo.style.color = colorSeleccionado;
  titulo.style.borderColor = colorSeleccionado;
  // Si el botón seleccionado es el de reset, el título se quedará blanco, no negro
  if (btnSeleccionado == btnReset) titulo.style.color = 'white';
}

// Refactorización del ejercicio. Eventos de click en los botones
btnRojo.addEventListener('click', (evento) => setColor(evento));
btnAzul.addEventListener('click', (evento) => setColor(evento));
btnAmarillo.addEventListener('click', (evento) => setColor(evento));
btnVerde.addEventListener('click', (evento) => setColor(evento));
btnRosa.addEventListener('click', (evento) => setColor(evento));
btnReset.addEventListener('click', (evento) => setColor(evento));

// Función para cuando el ratón entra por encima del botón
function ratonSobre(evento) {
  // Encontramos el botón sobre el que pasa el ratón y el color asignado
  let btnSeleccionado = botones.find(element => element == evento.currentTarget);
  let colorSeleccionado = colores[(botones.indexOf(btnSeleccionado))];

  // Una vez encontrados, modificamos las propiedades de estilo:
  for (let btn of botones) {
    if (btn == btnSeleccionado) btn.style.color = colorSeleccionado;
  }
}

// Función para cuando el ratón sale de encima del botón
function ratonFuera(evento) {
  let btnSeleccionado = botones.find(element => element == evento.currentTarget);
  // Comprobamos el color del box para ver si coincide con nuestro botón. En ese caso, no modificamos nada. En otro caso, al salir el ratón
  // pasa el color a negro
  let colorBox = box.style.background;
  // Como el color obtenido es rgb, sacamos su variable asociada gracias al mapa creado anteriormente
  colorBox = mapColoresRGB.get(colorBox);

  if (botones.indexOf(btnSeleccionado) != colores.indexOf(colorBox)) btnSeleccionado.style.color = colorNegro;
}

// Agregamos los eventos para cada botón cuando se pasa por encima
btnRojo.addEventListener('mouseover', (evento) => ratonSobre(evento));
btnRojo.addEventListener('mouseout', (evento) => ratonFuera(evento));

btnAzul.addEventListener('mouseover', (evento) => ratonSobre(evento));
btnAzul.addEventListener('mouseout', (evento) => ratonFuera(evento));

btnAmarillo.addEventListener('mouseover', (evento) => ratonSobre(evento));
btnAmarillo.addEventListener('mouseout', (evento) => ratonFuera(evento));

btnVerde.addEventListener('mouseover', (evento) => ratonSobre(evento));
btnVerde.addEventListener('mouseout', (evento) => ratonFuera(evento));

btnRosa.addEventListener('mouseover', (evento) => ratonSobre(evento));
btnRosa.addEventListener('mouseout', (evento) => ratonFuera(evento));

btnReset.addEventListener('mouseover', (evento) => ratonSobre(evento));
btnReset.addEventListener('mouseout', (evento) => ratonFuera(evento));

// Apartado 1.b. Añadimos un párrafo desde js
const texto = document.createElement('P');
texto.textContent = 'Este es un nuevo párrafo añadido desde JavaScript.';
texto.classList.add('texto');

const contenedorParrafo = document.getElementById('contenedor-parrafo');
contenedorParrafo.appendChild(texto);

// Apartado 1.d. Elegimos los botones de transformación de la imagen y le añadimos alguna funcionalidad. 
// Además, cada botón anterior cambia el borde de la misma
function giraDerecha(elemento) {
  elemento.style.transform = 'rotate(90deg)';
  btnGirarDer.style.marginTop = '6rem';
}

function ponRecto(elemento) {
  elemento.style.transform = 'rotate(0deg)';
  btnGirarDer.style.marginTop = '2rem';
}

function giraIzquierda(elemento) {
  elemento.style.transform = 'rotate(-90deg)';
  btnGirarDer.style.marginTop = '6rem';
}

function cambia(elemento) {
  if(sourceSeleccionada == 1) {
    elemento.src = imgSource2;
    sourceSeleccionada = 2;
  } else {
    elemento.src = imgSource1;
    sourceSeleccionada = 1;  
  }
}

const btnGirarDer = document.getElementById('btn-girar-der');
btnGirarDer.addEventListener('click', () => giraDerecha(imagenNueva));

const btnRecto = document.getElementById('btn-recto');
btnRecto.addEventListener('click', () => ponRecto(imagenNueva));

const btnGirarIzq = document.getElementById('btn-girar-izq');
btnGirarIzq.addEventListener('click', () => giraIzquierda(imagenNueva));

const btnCambiar = document.getElementById('btn-cambiar');
let sourceSeleccionada = 1;
const imgSource1 = '../images/backend.png';
const imgSource2 = '../images/otraImagen.jpg';
btnCambiar.addEventListener('click', () => cambia(imagenNueva))


// ------------------ Ejercicio 2. Fecha y hora actuales  ------------------

// Divs del html donde irán situados los elementos
const divHora = document.getElementById('hora');
const divFecha = document.getElementById('fecha');
const divDiaMes = document.getElementById('dia-mes');

// Fecha y hora actuales. Creamos el elemento, le asignamos el texto y la clase y lo añadimos al documento
let ahora = new Date();

let horaActual = document.createElement('p');
let ahorastr = ahora.toTimeString().split(' ')[0];
horaActual.textContent = `Hora: ${ahorastr}`;
horaActual.style.margin = '1.5rem';
horaActual.classList.add('texto-fecha');
divHora.appendChild(horaActual);

// Fecha actual. Creamos el elemento, le asignamos el texto y la clase y lo añadimos al documento
let fechaActual = document.createElement('p');
fechaActual.textContent = `Fecha: ${ahora.getDate()}/${ahora.getMonth() + 1}/${ahora.getFullYear()}`;
fechaActual.style.margin = '1.5rem';
fechaActual.classList.add('texto-fecha');
divFecha.appendChild(fechaActual);

// Día del mes. Creamos el elemento, le asignamos el texto y la clase y lo añadimos al documento

// Para ello, hacemos un método para obtener el día de la semana
function getDiaSemana(dia) {
  switch (dia) {
    case 0: return 'Domingo';
    case 1: return 'Lunes';
    case 2: return 'Martes';
    case 3: return 'Miércoles';
    case 4: return 'Jueves';
    case 5: return 'Viernes';
    case 6: return 'Sábado';
  }
}

let diaSemana = document.createElement('p');
diaSemana.textContent = `Día de la semana: ${getDiaSemana(ahora.getDay())}`;
diaSemana.style.margin = '1.5rem';
diaSemana.classList.add('texto-fecha');
divDiaMes.appendChild(diaSemana);


// Creamos el intervalo que actualice la hora
let timerHora = setInterval(() => {
  ahora = new Date();
  let ahorastr = ahora.toTimeString().split(' ')[0];
  horaActual.textContent = `Hora: ${ahorastr}`;
  fechaActual.textContent = `Fecha: ${ahora.getDate()}/${ahora.getMonth() + 1}/${ahora.getFullYear()}`;
  diaSemana.textContent = `Día de la semana: ${getDiaSemana(ahora.getDay())}`;
  console.log(ahora);
}, 1000);

// ------------------ Ejercicio 3. Ventana emergente de aviso para redirigir la página ------------------

let timerRedireccionEmergente = setInterval(() => {
  let decision = confirm('¿Quiere permanecer en la página? En caso contrario, será redirigido a la página web: https://javascript.info/');
  if (!decision) {
    window.location.href = 'https://javascript.info/';
  }
  // 1000 milisegundos * 60 segundos/minuto * 3 minutos
}, 1000 * 60 * 3);


// Ejercicio 4. Cuadro que indique su tamaño al modificarse

// Cuadro que variará su tamaño: textarea
let cuadro = document.getElementById('cuadro');

// Alto y ancho del cuadro. Creación de la función que se usará en el observer
let alto, ancho, altoViewport, anchoViewport;

function valoresTamanio() {
  alto = cuadro.offsetHeight;
  ancho = cuadro.offsetWidth;
  altoViewport = window.innerHeight;
  anchoViewport = window.innerWidth;
  
  cuadro.textContent = `Tamaño del cuadro: ${alto}px x ${ancho}px\nTamaño del viewpowrt: ${altoViewport}px x ${anchoViewport}px`;
}
// Observer para la modificación del tamaño del cuadro
let observer = new ResizeObserver(valoresTamanio);
observer.observe(cuadro);

// Evento para la modificación de la ventana e información en el cuadro
window.addEventListener('resize', valoresTamanio);


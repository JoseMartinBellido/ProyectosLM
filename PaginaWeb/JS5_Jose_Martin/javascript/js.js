

// ---------------- Cookie y modo oscuro ----------------

let btnBright = document.getElementById('btn-modo-claro'); 
let btnDark = document.getElementById('btn-modo-oscuro');

// Elementos que debemos modificar para el modo oscuro
let tituloPrincipal = document.getElementById('titulo_pagina');
let tituloPasafotos = document.querySelector('.contenedor-pasafotos h2');

// Elementos de los productos
let productos = document.getElementsByClassName('producto_div');
let tituloProductos = document.querySelectorAll('.producto_div h5');
let precioProductos = document.querySelectorAll('.producto_div h6');

// Contenedores de productos y titulos
let tituloDestacados = document.getElementById('titulo_destacados');
let destacados = document.getElementById('destacados');
let tituloNuevosLanzamientos = document.getElementById('titulo_nuevos_lanzamientos');
let nuevosLanzamientos = document.getElementById('nuevos_lanzamientos');


// Comprobación de una cookie anterior para la página web
if (document.cookie != ''){
    for (let cookies of document.cookie.split(';')){
        if (cookies.includes('mode')){
            let modo = cookies.split('=')[1];
            cambioModo(modo);
        }
    } 
}

// Función para el cambio de modo
function cambioModo(modo) {
    if (modo == 'dia') {
        document.cookie = `mode=${modo}`;
        document.body.style.backgroundColor = 'var(--colorFondo)';
        tituloPrincipal.style.color = 'var(--colorNegro)';
        tituloPasafotos.style.color = 'var(--colorNegro)';
        tituloDestacados.style.color = 'var(--colorNegro)';
        destacados.style.backgroundColor = 'var(--colorPrincipal)';
        tituloNuevosLanzamientos.style.color = 'var(--colorNegro)';
        nuevosLanzamientos.style.backgroundColor = 'var(--colorPrincipal)';
        for (let producto of productos) {
            producto.style.backgroundColor = 'var(--colorFondo)';
        }
        for (let titulos of tituloProductos) {
            titulos.style.color = 'var(--colorNegro)';
        }
        for (let precios of precioProductos) {
            precios.style.color = 'var(--colorNegro)';
        }
    } else if (modo == 'oscuro') {
        document.cookie = `mode=${modo}`;
        document.body.style.backgroundColor = 'var(--colorNegro)';
        tituloPrincipal.style.color = 'var(--colorFondo)';
        tituloPasafotos.style.color = 'var(--colorFondo)';
        tituloDestacados.style.color = 'var(--colorBlanco)';
        destacados.style.backgroundColor = 'var(--colorPrincipalOscuro)';
        tituloNuevosLanzamientos.style.color = 'var(--colorBlanco)';
        nuevosLanzamientos.style.backgroundColor = 'var(--colorPrincipalOscuro)';
        for (let producto of productos) {
            producto.style.backgroundColor = 'var(--colorPrincipal)';
        }
        for (let titulos of tituloProductos) {
            titulos.style.color = 'var(--colorFondo)';
        }
        for (let precios of precioProductos) {
            precios.style.color = 'var(--colorFondo)';
        }
    }
}

// Eventos sobre los botones
btnBright.addEventListener('click', () => cambioModo('dia'));
btnDark.addEventListener('click', () => cambioModo('oscuro'));


// ---------------- Pasafotos ----------------

// Identificamos las imágenes insertadas
let imagen1 = document.getElementById('imagen1');
let imagen2 = document.getElementById('imagen2');
let imagen3 = document.getElementById('imagen3');
let imagen4 = document.getElementById('imagen4');
let imagen5 = document.getElementById('imagen5');
let imagen6 = document.getElementById('imagen6');
let imagen7 = document.getElementById('imagen7');

// Identificamos las imágenes del selector inferior
let imagenSelector1 = document.getElementById('imagen1-selector');
let imagenSelector2 = document.getElementById('imagen2-selector');
let imagenSelector3 = document.getElementById('imagen3-selector');
let imagenSelector4 = document.getElementById('imagen4-selector');
let imagenSelector5 = document.getElementById('imagen5-selector');
let imagenSelector6 = document.getElementById('imagen6-selector');
let imagenSelector7 = document.getElementById('imagen7-selector');

// Las ponemos en un array
let imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7];
let imagenesSelector = [imagenSelector1, imagenSelector2, imagenSelector3, imagenSelector4, imagenSelector5, imagenSelector6, imagenSelector7];

// Creamos un contador que compruebe el desplazamiento y una función que realice el cambio de imagen
let desplazamiento = 0;

function desplaza(numero) {
    imagenes[desplazamiento].className = 'imagen';
    desplazamiento = (desplazamiento + numero) < 0 ? (desplazamiento + numero + 7) % imagenes.length : (desplazamiento + numero) % imagenes.length;
    imagenes[desplazamiento].className = 'imagen-activa';
}

// Le añadimos la funcionalidad a las imágenes del selector inferior para que modifiquen la imagen seleccionada en dicho momento

function selecciona(evento) {
    let elementoSeleccionado = evento.currentTarget;
    let indice = imagenesSelector.indexOf(elementoSeleccionado);
    imagenes[desplazamiento].className = 'imagen';
    desplazamiento = indice;
    imagenes[desplazamiento].className = 'imagen-activa';
}

imagenSelector1.addEventListener('click', (event) => selecciona(event));
imagenSelector2.addEventListener('click', (event) => selecciona(event));
imagenSelector3.addEventListener('click', (event) => selecciona(event));
imagenSelector4.addEventListener('click', (event) => selecciona(event));
imagenSelector5.addEventListener('click', (event) => selecciona(event));
imagenSelector6.addEventListener('click', (event) => selecciona(event));
imagenSelector7.addEventListener('click', (event) => selecciona(event));

// Botones de avance, retroceso, parada y continuar

// Botones de izquierda y derecha
let btnFlechaIzq = document.getElementById('flecha-izq');
let btnFlechaDer = document.getElementById('flecha-der');

btnFlechaIzq.addEventListener('click', () => desplaza(-1));
btnFlechaDer.addEventListener('click', () => desplaza(1));

// Botones de play y stop. Por defecto, comienza la web con el slider funcionando
let funcionando = true;
let sliderInterval = setInterval(desplaza, 5000, 1);

let btnParar = document.getElementById('btn-stop');
let btnContinuar = document.getElementById('btn-play');

// Si le damos al play y no está ya funcionando, se establece el intervalo. 
//Si le damos a stop, se para el intervalo de ejecución.
function playStop(booleano) {
    if (booleano && !funcionando) {
        funcionando = true;
        sliderInterval = setInterval(desplaza, 5000, 1);
    } else if (!booleano) {
        funcionando = false;
        clearInterval(sliderInterval);
    }
}

btnParar.addEventListener('click', () => playStop(false));
btnContinuar.addEventListener('click', () => playStop(true));
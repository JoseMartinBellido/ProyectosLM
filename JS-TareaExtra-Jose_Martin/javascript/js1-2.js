
// Icono del menú hamburguesa, contenedor de enlaces y un booleano que determine si está desplegado o no
const menuHamburguesa = document.getElementById('icono-menu-hamburguesa');
const contenedorIconos = document.getElementById('contenedor-enlaces');
let desplegado = false;

// Función a la que se llama al clickar sobre el icono del menú hamburguesa
function despliegaPliegaMenu(){
    if (desplegado){
        desplegado = false;
        contenedorIconos.style.display = 'none';
    } else {
        desplegado = true;
        contenedorIconos.style.display = 'flex';
    }
}

function cambiaMenuPorTamanio(){
    if (window.innerWidth >= 768){
        contenedorIconos.style.display = 'flex';
        desplegado = true;
    } else {
        contenedorIconos.style.display = 'none';
        desplegado = false;
    }
}

// Listener sobre el icono
menuHamburguesa.addEventListener('click', despliegaPliegaMenu);

// Se da la posibilidad de que se haga un display: none de los enlaces y se agrande la página. Para ello, se añade el evento a la ventana
window.addEventListener('resize', cambiaMenuPorTamanio);

// --------------------------------------------------------------------------------------------------------------

// Elementos de los colores

let fondos = document.querySelectorAll('#contenedor-fondos div');
let letras = document.querySelectorAll('#contenedor-letras div');

// Array con los colores (rojo, azul, amarillo, verde)
let colores = ['rgb(255,0,0)', 'rgb(0,0,255)', 'rgb(255,255,0)', 'rgb(0,128,0)'];

// Al iniciar la web, si hay una cookie activa se comprueban las de fondo y color por si hubiera alguna
let cookies = document.cookie.split(';');
for (let i = 0; i < cookies.length; i++){
    if (cookies[i].includes('fondo')){
        document.body.style.backgroundColor = cookies[i].split('=')[1];
    }
    if (cookies[i].includes('letra')){
        document.body.style.color = cookies[i].split('=')[1];
    }
}
 
// Funcion que establece el color dependiendo del elemento clickado. Se almacenará en una cookie 
function estableceColor(event) {
    let elementoPulsado = event.currentTarget;
    for (let i = 0; i < 4; i++) {
        if (elementoPulsado == fondos[i]){
            document.body.style.backgroundColor = colores[i];
            document.cookie = `fondo=${colores[i]}`;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (elementoPulsado == letras[i]){
            document.body.style.color = colores[i];
            document.cookie = `letra=${colores[i]}`;
        }
    }
    
}

for (let i = 0; i < 4; i++){
    fondos[i].addEventListener('click', event => estableceColor(event));
    letras[i].addEventListener('click', event => estableceColor(event));
}



// Ejercicio 3
const imagenes = document.querySelectorAll('header img');

let imagen1 = imagenes[0];
let imagen2 = imagenes[1];

imagen1.addEventListener('mouseover', () => {
    imagen1.style.display = 'none';
    imagen2.style.display = 'block';
});

imagen2.addEventListener('mouseleave', () => {
    imagen1.style.display = 'block';
    imagen2.style.display = 'none';
});
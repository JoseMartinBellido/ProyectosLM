
const main = document.querySelector('main');

document.getElementById('enlace_cc').addEventListener('click', () => {

    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        
        // Se elimina todo hijo dentro de main
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }

        // Si es el index, se elimina el pasafotos también
        if (document.querySelector('section')) {
            document.querySelector('section').remove();
        }

        let carrito = document.createElement('p');
        carrito.innerHTML = this.responseText;
        carrito.style.margin = '7vh 10vw';
        carrito.style.border = '3px black solid';
        carrito.style.padding = '2rem';
        carrito.style.textAlign = 'justify';

        carrito.style.display = 'flex';
        carrito.style.alignItems = 'center';
        carrito.style.justifyContent = 'center';

        main.appendChild(carrito);

    }

    xhttp.open("GET", "./txt/carrito_compra.txt", true);     
    xhttp.send();

});
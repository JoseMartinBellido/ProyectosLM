
/* Ejercicio 1. Crea un objeto cuyo contenido sea el número ordinal y como valor el número cardinal, es
decir, 1: primero, 2: segundo… hasta el 10: décimo. Crea una función que cada vez que se
introduzca el número ordinal nos dé como resultado el cardinal del número, hasta que se
introduzca un número distinto del 1 al 10 o cualquier otro valor. Utiliza la instrucción for..in.
HAY QUE HACERLO CON OBJETOS */

let numero;

let objetoNumeros = {
    uno: 'primero',
    dos: 'segundo',
    tres: 'tercero',
    cuatro: 'cuarto',
    cinco: 'quinto',
    seis: 'sexto',
    siete: 'séptimo',
    ocho: 'octavo',
    nueve: 'noveno',
    diez: 'décimo'
}

// Solicitamos el número mientras que sea mayor que 0 y menor o igual que 10

do{
    numero = prompt('Ejercicio 1. Introduzca un número del 1 al 10 (Introduzca un número fuera del intervalo para salir)');
    // Si el número no es un espacio en blanco, continuamos el método
    if (numero !== ''){
        // En este caso, convertimos a número y comprobamos que no es NaN y que es un entero
        numero = Number(numero);
        if (!isNaN(numero) && isInt(numero)) {

            let objetoNumeros = {
                textoObjeto:`${numero} : ${obtenerCardinal(numero)}`
            };

            alert(objetoNumeros.textoObjeto);
        }

    }
} while (numero > 0 && numero < 11);


// Función que devuelve un true si un número es entero, false si no lo es
function isInt(n) {
    return n % 1 === 0;
}
// Función que devuelve el cardinal de un número ordinal

function obtenerCardinal(numero){

    switch(numero){
        case 1:
            return objetoNumeros.uno;
        case 2:
            return objetoNumeros.dos;
        case 3:
            return objetoNumeros.tres;
        case 4:
            return objetoNumeros.cuatro;
        case 5:
            return objetoNumeros.cinco;
        case 6:
            return objetoNumeros.seis;
        case 7:
            return objetoNumeros.siete;
        case 8:
            return objetoNumeros.ocho;
        case 9:
            return objetoNumeros.nueve;
        case 10:
            return objetoNumeros.diez;
        default:
            return 'Número fuera de rango. Saliendo del programa.';
    }

}




/* Ejercicio 1. Crea un objeto cuyo contenido sea el número ordinal y como valor el número cardinal, es
decir, 1: primero, 2: segundo… hasta el 10: décimo. Crea una función que cada vez que se
introduzca el número ordinal nos dé como resultado el cardinal del número, hasta que se
introduzca un número distinto del 1 al 10 o cualquier otro valor. Utiliza la instrucción for..in.
HAY QUE HACERLO CON OBJETOS */

let numero;

let objetoNumeros = {
    '1': 'primero',
    '2': 'segundo',
    '3': 'tercero',
    '4': 'cuarto',
    '5': 'quinto',
    '6': 'sexto',
    '7': 'séptimo',
    '8': 'octavo',
    '9': 'noveno',
    '10': 'décimo'
}

// Solicitamos el número mientras que sea mayor que 0 y menor o igual que 10

do{
    numero = prompt('Ejercicio 1. Introduzca un número del 1 al 10 (Introduzca un número fuera del intervalo para salir)');
    // Si el número no es un espacio en blanco, continuamos el método
    if (numero !== ''){
        // En este caso, convertimos a número y comprobamos que no es NaN y que es un entero
        if (!isNaN(Number(numero)) && isInt(Number(numero))) {

            let objetoNumeros = {
                textoObjeto:`${numero} : ${obtenerCardinal(numero)}`
            };

            alert(objetoNumeros.textoObjeto);
        }

    }
} while (Number(numero) > 0 && Number(numero) < 11);


// Función que devuelve un true si un número es entero, false si no lo es
function isInt(n) {
    return n % 1 === 0;
}
// Función que devuelve el cardinal de un número ordinal

function obtenerCardinal(numero){

    for (let objeto in objetoNumeros){
        if (numero == objeto){
            return objetoNumeros[numero];
        }
    }
    return 'Número fuera de rango. Saliendo del programa.';
}



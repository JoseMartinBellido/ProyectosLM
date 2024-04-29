/* Ejercicio 5. Crea un script que calcule la potencia de un número sin utilizar **, pow o cualquier función
que realice la tarea directamente. La acción debe de ser con números y exponentes positivos.
Crea una función que realice esta acción y que sea llamada cada vez que se introduzcan los
valores. */
let base = '';

while (base !== 'salir') {
    base = '';
    let exponente;
    // Comprobamos el valor de la base
    base = prompt('Ejercicio 5. Introduzca el número de la base para realizar la potencia. (Inserte \'salir\' para salir del programa)');
    
    // Condicional realizada por si el primer valor introducido es 'salir'
    if (base !== 'salir'){
        // Definimos el exponente
        exponente = prompt('Ejercicio 5. Introduzca el número del exponente para realizar la potencia');
        
        resultado = calculaPotencia(base,exponente);
        if (isInt(resultado))
            alert(`El resultado de elevar ${base} a ${exponente} es ${resultado}`);
        else
            alert(resultado);
    }
}

// Función para comprobar si un número es entero
function isInt (numero){
    return numero % 1 === 0;
}

function calculaPotencia(base, exponente){
    let potencia = 1;
    // Si la base y el exponente están definidos, y el exponente es entero mayor que cero, calculamos la potencia
    if (base !== '' && exponente !== '' && !isNaN(Number(base)) && isInt(Number(exponente)) && Number(exponente) >= 0){
        base = Number(base);
        exponente = parseInt(exponente);
        
        // Todo número elevado a 0 da como resultado 1
        if (exponente == 0){
            potencia = 1;
        } else{
            // Si el exponente es mayor que 0, se multiplicará por sí mismo tantas veces como se indique
            for (let i = 1; i <= exponente; i++){
                potencia *= base;
            }
        }

        return potencia;
    } else {
        return 'Alguno de los números indicados no es correcto. Por favor, inténtelo de nuevo revisando las reglas estipuladas.'
    }
}
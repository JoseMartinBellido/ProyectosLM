/* 1. Escribe un script que muestre tu nombre y el curso y el campo de la informática donde te gustaría trabajar */

alert('Ejercicio 1:\nNombre: José Martín Bellido\nCurso: 1º Desarrollo de Aplicaciones Multiplataforma' 
    + '\nCampo de especialización deseado: Backend');


/* 2. Realiza la suma de los números que se introduzcan por teclado hasta que se lea un cero. */

let numeroIntroducido = 1;
let suma = 0;

// Hacemos un bucle while que no salga del programa mientras que no pulsemos un 0 y vamos sumando datos
while (numeroIntroducido !== "0") {
    numeroIntroducido = prompt("Ejercicio 2. Introduce un número para realizar la suma (0 para salir)");
    if (isNaN(Number(numeroIntroducido)) || numeroIntroducido == "") {
        alert("El dato introducido no lo tendremos en cuenta ya que no es válido.")
    } else {
        suma += Number(numeroIntroducido);
    }

}

// Imprimimos el resultado
alert(`La suma total es de ${suma}`);

/* 3. Leer 4 valores numéricos de una cifra. Esos valores en realidad son un solo número y habrá que escribirlo 
por pantalla completo. Por ejemplo, introduzco el 1, 2, 3 y 4. El resultado es 1234. */

let arrayNumIntroducidos = [];

// Rellenamos el array con 4 números
while (arrayNumIntroducidos.length < 4) {
    let numIntroducido = prompt('Ejercicio 3. Introduce un número. Se formará un número concatenando 4 valores ofrecidos.');

    // Si el número introducido es realmente un número mayor o igual que 0
    if (!isNaN(Number(numIntroducido)) && Number(numIntroducido) >= 0 && numIntroducido !== "") {
        // Ponemos el valor al final del array
        arrayNumIntroducidos.push(Number(numIntroducido));
        // Si el dato introducido no es un número, avisamos al usuario y le hacemos repetir la operación indefinidamente  
    } else {
        alert('El dato introducido no cumple los requisitos. Pruebe de nuevo.');
    }
}

// Tomamos una variable String y recorremos el array para concatenar los datos introducidos
let numFinal = "";

for (let i = 0; i < 4; i++) {
    numFinal += arrayNumIntroducidos[i];
}

// Imprimimos el resultado
alert(`El número final con los 4 introducidos sería: ${numFinal}`);

/* 4. Leer el valor de la nota de un alumno y poner la nota correspondiente en texto. Por ejemplo,
un 7.2 es notable. */

// Solicitamos la nota 
let nota = "";

while (isNaN(Number(nota)) || nota === "" || Number(nota) < 0){
    nota = prompt('Ejercicio 4. Introduce la nota de la asignatura');

    if(isNaN(Number(nota)) || nota === "" || Number(nota) < 0){
        alert('El dato introducido no cumple los requisitos. Pruebe de nuevo.')
    } else {
        nota = Number(nota);
    }
}

let calificacion;

// Le damos una calificación adecuada en función al valor indicado
if (nota < 5) {
    calificacion = 'suspenso';
} else if (nota < 7) {
    calificacion = 'aprobado';
} else if (nota < 9) {
    calificacion = 'notable';
} else {
    calificacion = 'sobresaliente';
}

// Imprimimos el resultado
alert(`Con una nota de ${nota}, tienes una calificación de ${calificacion}`);

/* 5. Introducir 10 valores en un array, mostrar la suma de sus valores, el mayor valor, el menor
valor y la media de los valores. */

let arrayNumeros = [];

// Rellenamos el array con 10 números
while (arrayNumeros.length < 10) {
    let numIntroducido = prompt('Ejercicio 5. Introduce un número (Se introducirán 10 valores)');

    // Si el número introducido es realmente un número
    if (!isNaN(Number(numIntroducido)) && numIntroducido !== "") {
        // Ponemos el valor al final del array
        arrayNumeros.push(Number(numIntroducido));
        // Si el dato introducido no es un número, avisamos al usuario y le hacemos repetir la operación indefinidamente  
    } else {
        alert('El dato introducido no cumple los requisitos. Pruebe de nuevo.');
    }
}

// Para calcular el mayor y el menor, los igualamos al primer elemento y luego comprobamos con respecto a los demás
// Para la suma, lo igualamos al primer elemento y sumamos los demás
let mayor = arrayNumeros[0];
let menor = arrayNumeros[0];
let sum = arrayNumeros[0];

for (let i = 1; i < arrayNumeros.length; i++) {

    sum += arrayNumeros[i];

    if (mayor < arrayNumeros[i]) {
        mayor = arrayNumeros[i];
    }

    if (menor > arrayNumeros[i]) {
        menor = arrayNumeros[i];
    }

}

let media = sum / 10;

// Imprimimos resultados

alert(`El mayor número es ${mayor}, el menor número es ${menor}.
        \nLa suma de todos ellos da como resultado ${sum} y la media es ${media}`);

/* 6. Rellenar un array con valores aleatorios mediante una función matemática de 20 elementos
tipo entero entre el 10 y el 20. Después hay que recorrer el array y el programa tendrá que
mostrar el total de valores mayores que 15, menores que 15 e iguales a 15.
 */

alert('Ejercicio 6. Valores aleatorios en un array');

let arrayAleatorios = [];
let aleatorio;

for (let i = 0; i < 20; i++){
    // Math.random() genera un número entre 0 y 1. Lo multiplicamos por 10 para que esté entre 0 y 10 y le sumamos 10 para que esté entre 10 y 20
    aleatorio = Math.round((Math.random() * 10) + 10);
    arrayAleatorios.push(aleatorio);
}

let menoresQue15 = "";
let igualesQue15 = "";
let mayoresQue15 = "";

for (let i = 0; i < arrayAleatorios.length; i++){
    if (arrayAleatorios[i] < 15){
        menoresQue15 += ', ' + arrayAleatorios[i];
    } else if (arrayAleatorios[i] > 15){
        mayoresQue15 += ', ' + arrayAleatorios[i];
    } else {
        igualesQue15 += ', ' + arrayAleatorios[i];
    }

} 

// Les quitamos la primera coma y el primer espacio a las variables del resultado
menoresQue15 = menoresQue15.substring(2);
igualesQue15 = igualesQue15.substring(2);
mayoresQue15 = mayoresQue15.substring(2);
alert(`Los números menores que 15 son: ${menoresQue15}.\nLos números iguales a 15 son: ${igualesQue15}\nLos números mayores que 15 son: ${mayoresQue15}`);


/* 7 Opcional. Introducir 10 valores en una línea separada por espacios en blancos. En un array deben de
introducirse los valores pares y en otro los impares.*/

// Pedimos la cadena de números al usuario
let cadenaDeNumeros = prompt('Ejercicio 7 Opcional. Introduce 10 números separados por un espacio')

let pares = [];
let impares = [];
let numeroActual = "";
let contadorDeNumeros = 0;
let arrayCorrecto = true;

// Recorremos la cadena para separar los números
for (let i = 0; i < cadenaDeNumeros.length; i++) {
    // Si el char de una posición concreta no es un espacio ni es el último, es parte del mismo número
    if (cadenaDeNumeros.charAt(i) !== ' ' && i !== cadenaDeNumeros.length - 1) {
        numeroActual += cadenaDeNumeros.charAt(i);
        // En caso de que sea un espacio, el número ha acabado, comprobamos si es par o impar y reiniciamos numeroActual
    } else {
        // Tenemos en cuenta que el número sea el último. En ese caso, el último char es parte del número y a la vez lo añadimos a la lista.
        if (i == cadenaDeNumeros.length - 1){
            numeroActual += cadenaDeNumeros.charAt(i);
        }
        // Aumentamos el contador
        contadorDeNumeros++;
        // Comprobamos que sea un número correcto, es decir, no se han introducido símbolos extraños
        if (isNaN(Number(numeroActual))) {
            alert('Se han introducido letras o símbolos no permitidos. Procedemos a terminar el programa.');
            arrayCorrecto = false;
            break;
            // Si el número es correcto, vemos si es par y lo metemos en su array correspondiente
        } else if (Number(numeroActual) % 2 == 0) {
            pares.push(numeroActual);
            numeroActual = "";
            // Si no es par y es correcto, debe ser impar
        } else {
            impares.push(numeroActual);
            numeroActual = "";
        }
    }
}

// Volvemos a recorrerlo para comprobar que no hay varios espacios seguidos
for (let i = 1; i < cadenaDeNumeros.length; i++) {
    if (cadenaDeNumeros[i] === " " && cadenaDeNumeros[i-1] === " "){
        arrayCorrecto = false;
    }
}

// Imprimimos resultados. Si no se han introducido 10 valores, lo máximo que hacemos es avisar al usuario que no se han introducido

if (arrayCorrecto){
    alert(`Has introducido: ${contadorDeNumeros} números. \nPares: ${pares}.\nImpares: ${impares}`);
} else{
    alert("La cadena introducida es incorrecta. Por favor, revisa la indicación del ejercicio para introducir los datos e inténtalo de nuevo.")
}




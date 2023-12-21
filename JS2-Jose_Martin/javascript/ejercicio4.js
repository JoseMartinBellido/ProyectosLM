/* Ejercicio 4. Realiza el ejercicio 3 utilizando alguna función predefinida. 
a. si la segunda es una subcadena de la primera o no lo es
b. la cantidad de caracteres de ambas cadenas
c. devolver la cadena con las vocales en mayúsculas y si la cadena tiene más de 5 caracteres, eliminar desde el quinto hacia adelante y 
mostrar puntos suspensivos */

let cadena1Bis = prompt('Ejercicio 4. Introduzca una cadena de caracteres');
let cadena2Bis = prompt('Ejercicio 4. Introduzca una segunda cadena de caracteres');

// Obtenemos con funciones predefinidas los apartados a y b
let [contieneONoBis,longitudCadena1Bis, longitudCadena2Bis] = [cadena2Bis.includes(cadena1Bis), cadena1Bis.length, cadena2Bis.length];

// Asignamos un mensaje dependiendo del booleano contieneONo
if (contieneONoBis) {
    contieneONoBis = 'La segunda cadena SÍ contiene a la primera cadena';
} else {
    contieneONoBis = 'La segunda cadena NO contiene a la primera cadena';
}

// Modificamos la segunda cadena con la misma lógida del ejercicio 3
let vocalesMinusculas = 'aeiou';
let vocalesMayusculas = 'AEIOU';
let primerasLetrasBis = '';

for (let i = 0; i < 5; i++){
    if (cadena2Bis[i] != undefined){
        if (vocalesMinusculas.includes(cadena2Bis[i])){
            primerasLetrasBis += vocalesMayusculas.charAt(vocalesMinusculas.charAt(cadena2Bis[i]))
        } else {
            primerasLetrasBis += cadena2Bis[i];
        }
        
    }
}

if (longitudCadena2Bis > 5){
    primerasLetrasBis += '...';
}

alert(`${contieneONoBis}\nLa cadena 1 tiene ${longitudCadena1Bis} caracteres, y la cadena 2 tiene ${longitudCadena2Bis} caracteres
La segunda cadena transformada es: ${primerasLetrasBis}`);

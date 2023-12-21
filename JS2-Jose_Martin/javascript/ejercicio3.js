/*Ejercicio 3. (OPCIONAL) Lee dos cadenas de caracteres por teclado y visualiza por pantalla lo siguiente: (Utiliza la asignación desestructurada)
NOTA: No puedes utilizar ninguna función predefinida en JS
a. si la segunda es una subcadena de la primera o no lo es
b. la cantidad de caracteres de ambas cadenas
c. devolver la cadena con las vocales en mayúsculas y si la cadena tiene más de 5 caracteres, eliminar desde el quinto hacia adelante y 
mostrar puntos suspensivos */

let cadena1 = prompt('Ejercicio 3. Introduzca una cadena de caracteres');
let cadena2 = prompt('Ejercicio 3. Introduzca una segunda cadena de caracteres');

let [longitudCadena1, longitudCadena2, contieneONo, primerasLetras] = determinaPropiedadesCadenas(cadena1, cadena2);

alert(`${contieneONo}\nLa cadena 1 tiene ${longitudCadena1} caracteres, y la cadena 2 tiene ${longitudCadena2} caracteres
La segunda cadena transformada es: ${primerasLetras}`);



let objetoCadenas = {
    contiene: cadena2
}


// Función que determina su una cadena es subcadena de otra
function determinaPropiedadesCadenas(cadena1, cadena2) {

    // Como no se puede usar ninguna función predefinida de JS, calculamos el tamaño de cada cadena
    let j = 0;
    let elementoCadena = cadena1[j];
    while (elementoCadena != undefined) {
        j++;
        elementoCadena = cadena1[j];
    }
    let longitudCadena1 = j;

    j = 0;
    elementoCadena = cadena2[j];
    while (elementoCadena != undefined) {
        j++;
        elementoCadena = cadena2[j];
    }
    let longitudCadena2 = j;

    // Comprobamos si la cadena2 contiene a la cadena1

    let contieneONo = false;

    if (longitudCadena2 >= longitudCadena1) {
        for (let i = 0; i <= longitudCadena2 - longitudCadena1; i++) {
            let subcadena2 = "";
            for (let m = 0; m < longitudCadena1; m++) {
                subcadena2 += cadena2[i + m];
            }

            if (subcadena2 == cadena1) {
                contieneONo = true;
            }

            if (contieneONo)
                break;
        }

    }

    let resultado = [];
    resultado[0] = longitudCadena1;
    resultado[1] = longitudCadena2;

    if (contieneONo)
        resultado[2] = 'La cadena2 contiene a la cadena1';
    else
        resultado[2] = 'La cadena2 NO contiene a la cadena1';

    // Modificamos la segunda cadena para obtener las vocales en mayúscula y, si la cadena tiene más de 5 caracteres, 
    // se cambian los demás por puntos suspensivos
    
    let [vocalAMinuscula, vocalEMinuscula, vocalIMinuscula, vocalOMinuscula, vocalUMinuscula] = ['a', 'e', 'i', 'o', 'u'];
    let [vocalAMayuscula, vocalEMayuscula, vocalIMayuscula, vocalOMayuscula, vocalUMayuscula] = ['A', 'E', 'I', 'O', 'U'];

    let primerasLetras = '';
    for (let i = 0; i < 5; i++){
        
        if (cadena2[i] != undefined){
            // Si el elemento está definido y es una vocal minúscula, , le asignamos la mayúscula. Sino, le añadimos la misma letra
            switch (cadena2[i]){
            case vocalAMinuscula:
                primerasLetras += vocalAMayuscula;
                break;
            case vocalEMinuscula:
                primerasLetras += vocalEMayuscula;
                break;
            case vocalIMinuscula:
                primerasLetras += vocalIMayuscula;
                break;
            case vocalOMinuscula:
                primerasLetras += vocalOMayuscula;
                break;
            case vocalUMinuscula:
                primerasLetras += vocalUMayuscula;
                break;
            default:
                primerasLetras += cadena2[i];
            }
        }


    }

    // Si la longitud es mayor a 5, le añadimos puntos suspensivos a la cadena
    if (longitudCadena2 > 5){
        primerasLetras += '...';
    }

    resultado[3] = primerasLetras;

    return resultado;
}





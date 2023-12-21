
/*Ejercicio 2. Crea un script que acepte dos valores introducidos en decimal y muestre el resultado de la suma en binario y en hexadecimal. 
Utiliza asignación desectructurada.*/

// Solicitamos los 2 números
let numero1 = prompt('Ejercicio 2. Introduzca un número decimal para realizar la suma')
let numero2 = prompt('Ejercicio 2. Introduzca un segundo número decimal para realizar la suma')

// Sólo operamos con ellos si son realmente números decimales. En caso contrario, avisamos al usuario
if (numero1 !== '' && numero2 !== '' && !isNaN(Number(numero1)) && !isNaN(Number(numero2))){
    
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    let objetoSuma = {
        sumaHex: (numero1 + numero2).toString(16),
        sumaBinario: (numero1 + numero2).toString(2)
    }

    let {sumaHex, sumaBinario} = objetoSuma;

    alert(`La suma de los números en hexadecimal es ${sumaHex}. \nLa suma de los números en binario es ${sumaBinario} `)

} else {
    alert('Alguno de los valores no es un número decimal válido.')
}
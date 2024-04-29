
/*Ejercicio 6. Realiza un script que muestre la tabla de multiplicar del valor introducido por teclado del 1
al 10. Una vez hecho esto se le preguntará si desea continuar. En el caso de que así sea, se
continuará con los 10 siguientes números, así hasta que se le pulse cancelar. Debe de utilizarse
una función flecha. */
let numeroTablaMultiplicar = prompt('Ejercicio 6. Introduzca un número para desarrollar la tabla de multiplicar.');

let multiplicacion = (a,b) => a * b;
let esInt = (num) => num % 1 === 0; 

if (numeroTablaMultiplicar !== '' && esInt(Number(numeroTablaMultiplicar))){
    let rango = 1;
    let continuar = true;
    while (continuar) {
        let resultadoTabla = '';
        for (let i = rango; i < rango + 10; i++){

            numeroTablaMultiplicar = Number(numeroTablaMultiplicar);
            resultadoTabla += `${numeroTablaMultiplicar} X ${i} = ${multiplicacion(numeroTablaMultiplicar,i)}\n`
        }
        rango += 10;
        alert(resultadoTabla);
    
        continuar = confirm('¿Desea continuar? (Pulse \'Cancelar\' para parar))');
    }
    
} else {
    alert('El dato introducido no es un número válido.');
}

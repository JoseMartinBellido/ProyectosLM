alert("Hola mundo!");

/* let num1 = 1;
let num2 = 2;
let num3 = '"cero" es 0'; */

/* let numm1 = 0, numm2 = 5, numm3 = 8;

alert(typeof numm1);
alert(numm2);
alert(numm3); */

/* let nombre = prompt('Escriba su nombre', 'Jose');

let gusta = confirm("¿Te gusta la página?");

alert(nombre);
alert(gusta);

let edad = Number(prompt('Escriba su edad'));

if (edad > 25){
    alert('Eres muy mayor');
} else{
    alert('Eres muy joven-');
}
 */

suma();

function suma(){
    let valor1, valor2, suma;

    valor1 = Number(prompt("Introduce el primer valor"));
    valor2 = Number(prompt("Introduce el primer valor"));

    suma = valor1 + valor2;
    
    alert(suma);
}
<?php
/*1. Crear variables tipo entero, punto flotante, cadena de caracteres y booleanos. 
Realiza las operaciones básicas con ellos y muestra el resultado por pantalla. 
Comprueba que presente por pantalla lo que realmente se espera. */

// Creación de variables
$mi_entero = 5;
$mi_double = 2.2;
$mi_string = "Hola Francis";
$mi_booleano_true = true;
$mi_booleano_false = false;

echo "El resultado de multiplicar $mi_entero por 3 es de " . ($mi_entero * 3) . "\n";
echo "En PHP también existen las operaciones módulo y potencia: 5 % 2 = " . ($mi_entero % 2) . " y 5 ** 2 = " . ($mi_entero ** 2) . "\n";
echo "Suma de distintos tipos (entero y double): $mi_entero + $mi_double = " . ($mi_entero + $mi_double) . "\n";

echo "La división de enteros es entero o double (dependiendo del caso) y no lanza error: $mi_entero / 2 = " . ($mi_entero / 2) . "\n";
echo "La división de enteros es entero o double (dependiendo del caso) y no lanza error: $mi_entero / 5 = " . ($mi_entero / 5) . "\n";

echo "Imprimir por pantalla un booleano da resultados curiosos. true -> '" . $mi_booleano_true . "' y false -> '" . $mi_booleano_false . "'\n";

echo "Como el booleano true se imprime como 1, ¿podremos sumar $mi_entero y $mi_booleano_true? -> " . ($mi_entero + $mi_booleano_true) . "\n";
echo "¿Y con false funcionará igual? ¿podremos sumar $mi_entero y $mi_booleano_false considerando false como cero? -> " 
    . ($mi_entero + $mi_booleano_false) . "\n";

echo "Como el símbolo de concatenar en php no es el '+', sino que es el '.', no tiene sentido comprobar qué pasa al sumar/concatenar números 
    como ocurre en javascript.\n";
echo "Pero sí que podemos comprobar qué pasa al concatenar $mi_string con $mi_booleano_true -> " . $mi_string . $mi_booleano_true . "\n";

// echo "¿Se pueden sumar en php números y strings? $mi_entero + $mi_string = " . ($mi_entero + $mi_string) + "\n"; // => Lanza Error

echo "Por último, ¿sumar true + true dará false o dará 2? -> " . ($mi_booleano_true + $mi_booleano_true)

?>
<?php

/* 3. Introducir un número en una variable y si éste es cero, visualizar en pantalla su valor escrito con letras. 
Si es distinto mayor de cero, visualizar su cuadrado. Informar de error en caso de que el valor sea menor que cero */

$numero = -1;

if ($numero > 0) {
    echo "El cuadrado de $numero es " . $numero * $numero;

} elseif ($numero == 0) {
    echo "El número $numero escrito con palabras es cero";

} else {
    echo "Error: El número $numero es menor que cero";
}

?>
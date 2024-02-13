<?php

// Hola Mundo
echo "Hola, PHP \n";

/* Comentario */

// Variables

$my_string = "Esto es una cadena de texto";
echo $my_string . "\n";

$my_string = "Aquí cambio el valor de mi cadena de texto";
echo $my_string . "\n";

echo gettype($my_string) . "\n";

// PHP es de tipado débil. Permite estos cambios de variable de string a integer
$my_string = 6;
echo $my_string . "\n";
echo gettype($my_string) . "\n";
$my_string = "Aquí cambio el valor de mi cadena de texto";

$my_integer = 7;
$my_integer = $my_integer + 5;
echo $my_integer . "\n";

//Esta linea no cambia el valor, muestra una resta
echo $my_integer - 1 . "\n";
echo $my_integer . "\n";

$my_double = 6.5;
echo gettype($my_double) . "\n";
// Permite las sumas entre variables de distintos tipos
echo $my_double + $my_integer . "\n";

// Pero no es tan flexible como javascript. Es menos permisivo
// echo $my_double + $my_string . "\n";

$my_boolean = false;
echo $my_boolean . "\n";
echo gettype($my_boolean) . "\n";
$my_boolean = true;
echo $my_boolean == 0 . "\n";

// Se pueden usar de una forma muy sencilla dentro de un echo
echo "El valor de mi integer es $my_integer y el de mi boolean es $my_boolean\n";

// CONSTANTES
// Para definir una constante se debe usar la palabra reservada const.
// Esto implica que no es necesario el uso del símbolo $ en la palabra
const MY_CONSTANT = "Valor de la constante";
echo MY_CONSTANT . "\n";

// ARRAYS
$my_array = [$my_string, $my_integer, $my_boolean];
echo gettype($my_array) . "\n";
echo $my_array[0] . " " . $my_array[1] . " " . $my_array[2];
// Método push
array_push($my_array, $my_double);
// Imprimir todo el array
print_r($my_array);

// DICCIONARIOS
$my_dictionary = array("string" => $my_string, "integer" => $my_integer, "boolean" => $my_boolean);
// Un diccionario sigue siendo un array en php
echo gettype($my_dictionary) . "\n";
echo $my_dictionary["string"] . "\n";

print_r($my_dictionary);

// SETS
// No hay sets como tal en php, sino un método que elimina duplicados de los arrays
array_push($my_array, $my_double);
print_r(array_unique($my_array));

?>
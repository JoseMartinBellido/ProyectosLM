<?php

/*7. Visualizar los números comprendidos entre dos números. Utiliza la instrucción “while”. */

$numero1 = 10;
$numero2 = 10;

// El ejercicio no especificia si se visualizan los números que definen el rango también. Se tomará la opción en que sólo se ven los que están
// en el intervalo

if ($numero2 >= $numero1) {
    echo "Los números comprendidos entre $numero1 y $numero2 son: ";
    while ($numero1 < $numero2 - 1) {
        echo ++$numero1 . " ";
    }
} else {
    echo "El segundo número es menor que el primero. No hay números entre ambos";
}


?>
<?php

/*8. Visualiza la suma de los números comprendidos entre 0 y otro número (validado
mayor que cero) introducido en una variable. Utiliza la instrucción “for”. */

$numeroFin = 6;
$suma = 0;

if ($numeroFin > 0) {
    for ($i=0; $i <= $numeroFin; $i++) { 
        $suma += $i;
    }
    
    echo "La suma de los elementos desde 0 hasta $numeroFin es $suma";
} else {
    echo "El número indicado debe ser mayor que 0";
}


?>
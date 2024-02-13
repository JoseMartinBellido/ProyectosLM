<?php

/*6. Crea un programa que muestre el nombre del mes que corresponda al número
introducido en una variable. Donde 1 sería enero, 2 febrero… Utiliza la instrucción
“elseif”. */

$numeroMes = 15;

if ($numeroMes == 1){
    $palabraMes = "enero";
} elseif ($numeroMes == 2) {
    $palabraMes = "febrero";
} elseif ($numeroMes == 3) {
    $palabraMes = "marzo";
} elseif ($numeroMes == 4) {
    $palabraMes = "abrir";
} elseif ($numeroMes == 5) {
    $palabraMes = "mayo";
} elseif ($numeroMes == 6) {
    $palabraMes = "junio";
} elseif ($numeroMes == 7) {
    $palabraMes = "julio";
} elseif ($numeroMes == 8) {
    $palabraMes = "agosto";
} elseif ($numeroMes == 9) {
    $palabraMes = "septiembre";
} elseif ($numeroMes == 10) {
    $palabraMes = "octubre";
} elseif ($numeroMes == 11) {
    $palabraMes = "noviembre";
} elseif ($numeroMes == 12) {
    $palabraMes = "diciembre";
} else {
    $palabraMes = "no definido";
}

echo "El mes con número $numeroMes es $palabraMes";

?>
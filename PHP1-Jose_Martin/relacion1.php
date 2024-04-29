<?php

/*1. Crear variables tipo entero, punto flotante, cadena de caracteres y booleanos. 
Realiza las operaciones básicas con ellos y muestra el resultado por pantalla. 
Comprueba que presente por pantalla lo que realmente se espera. */
echo "Ejercicio 1: <br/>";
// Creación de variables
$mi_entero = 5;
$mi_double = 2.2;
$mi_string = "Hola Francis";
$mi_booleano_true = true;
$mi_booleano_false = false;

echo "El resultado de multiplicar $mi_entero por 3 es de " . ($mi_entero * 3) . "<br/>";
echo "En PHP también existen las operaciones módulo y potencia: 5 % 2 = " . ($mi_entero % 2) . " y 5 ** 2 = " . ($mi_entero ** 2) . "<br/>";
echo "Suma de distintos tipos (entero y double): $mi_entero + $mi_double = " . ($mi_entero + $mi_double) . "<br/>";

echo "La división de enteros es entero o double (dependiendo del caso) y no lanza error: $mi_entero / 2 = " . ($mi_entero / 2) . "<br/>";
echo "La división de enteros es entero o double (dependiendo del caso) y no lanza error: $mi_entero / 5 = " . ($mi_entero / 5) . "<br/>";

echo "Imprimir por pantalla un booleano da resultados curiosos. true -> '" . $mi_booleano_true . "' y false -> '" . $mi_booleano_false . "'<br/>";

echo "Como el booleano true se imprime como 1, ¿podremos sumar $mi_entero y true? -> " . ($mi_entero + $mi_booleano_true) . "<br/>";
echo "¿Y con false funcionará igual? ¿podremos sumar $mi_entero y $mi_booleano_false considerando false como cero? -> " 
    . ($mi_entero + $mi_booleano_false) . "<br/>";

echo "Como el símbolo de concatenar en php no es el '+', sino que es el '.', no tiene sentido comprobar qué pasa al sumar/concatenar números 
    como ocurre en javascript.<br/>";
echo "Pero sí que podemos comprobar qué pasa al concatenar $mi_string con $mi_booleano_true -> " . $mi_string . $mi_booleano_true . "<br/>";

// echo "¿Se pueden sumar en php números y strings? $mi_entero + $mi_string = " . ($mi_entero + $mi_string) + "\n"; // => Lanza Error

echo "Por último, ¿sumar true + true dará false o dará 2? -> " . ($mi_booleano_true + $mi_booleano_true) . "<br/><br/>";


// 2. Introducir un número en una variable y que el programa informe si es mayor que 50 o no.
echo "Ejercicio 2: <br/>";

$numero = 40;

if ($numero > 50) {
    echo "El número $numero es mayor a 50<br/><br/>";
} else {
    echo "El número $numero es menor o igual que 50<br/><br/>";
}


/* 3. Introducir un número en una variable y si éste es cero, visualizar en pantalla su valor escrito con letras. 
Si es distinto mayor de cero, visualizar su cuadrado. Informar de error en caso de que el valor sea menor que cero */
echo "Ejercicio 3: <br/>";
$numero = -1;

if ($numero > 0) {
    echo "El cuadrado de $numero es " . $numero * $numero ."<br/><br/>";

} elseif ($numero == 0) {
    echo "El número $numero escrito con palabras es cero<br/><br/>";

} else {
    echo "Error: El número $numero es menor que cero<br/><br/>";
}

/*4. Introducir dos números en dos variables y que el programa informe si son iguales
y, en caso contrario, cuál es el mayor y cuál el menor */

echo "Ejercicio 4: <br/>";

$numero1 = 10;
$numero2 = 10;

if ($numero1 == $numero2){
    echo "Los números $numero1 y $numero2 son iguales<br/><br/>";
} else {
    echo "Los números $numero1 y $numero2 no son iguales<br/><br/>";
}

/*5. Introducir un número en una variable y que el programa informe si es divisible por tres. */
echo "Ejercicio 5: <br/>";

$numero = 7;

if ($numero % 3 == 0) {
    echo "El número $numero es divisible por 3<br/><br/>";
} else {
    echo "El número $numero no es divisible por 3<br/><br/>";
}

/*6. Crea un programa que muestre el nombre del mes que corresponda al número
introducido en una variable. Donde 1 sería enero, 2 febrero… Utiliza la instrucción
“elseif”. */
echo "Ejercicio 6: <br/>";

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

echo "El mes con número $numeroMes es $palabraMes <br/><br/>";

/*7. Visualizar los números comprendidos entre dos números. Utiliza la instrucción “while”. */
echo "Ejercicio 7: <br/>";


$numero1 = 10;
$numero2 = 15;

// El ejercicio no especificia si se visualizan los números que definen el rango también. Se tomará la opción en que sólo se ven los que están
// en el intervalo (exclusivo)

if ($numero1 > $numero2){
    $aux = $primero;
    $primero = $segundo;
    $segundo = $aux;

} 

// Se contemplan casos de igualdad y de números consecutivos. Sino, se realiza el cálculo
if ($numero1 == $numero2) {
    echo "Los números son iguales";

} elseif ($numero1 == $numero2 + 1 || $numero1 == $numero2 - 1){
    echo "Los números son consecutivos";

} else {
    echo "Los números comprendidos entre $numero1 y $numero2 son: ";
    while ($numero1 < $numero2 - 1) {
        echo ++$numero1 . " ";
    }
}

echo "<br/><br/>";


/*8. Visualiza la suma de los números comprendidos entre 0 y otro número (validado
mayor que cero) introducido en una variable. Utiliza la instrucción “for”. */
echo "Ejercicio 8: <br/>";

$numeroFin = 6;
$suma = 0;

if ($numeroFin > 0) {
    for ($i=0; $i <= $numeroFin; $i++) { 
        $suma += $i;
    }
    
    echo "La suma de los elementos desde 0 hasta $numeroFin es $suma <br/>";
} else {
    echo "El número indicado debe ser mayor que 0 <br/>";
}

?>

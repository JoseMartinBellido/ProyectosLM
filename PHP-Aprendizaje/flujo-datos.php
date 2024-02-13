<?php

$my_array = [1, 2, 3, 4, 5, 6];

// Bucle de 5 vueltas
for ($index = 0; $index < 5; $index++){
    echo $index . " ";
}

echo "\n";

// Bucle foreach
foreach ($my_array as $my_item) {
    echo $my_item . " ";
}

echo "\n";

$index = 0;
// Bucle while
while ($index < sizeof($my_array)) {
    echo $my_array[$index] . " ";
    $index++;
}

echo "\n";

$my_integer = 10;
$my_string = "hola";

if ($my_integer == 11 && $my_string == "hola") {
    echo "El valor es 11\n";
} else if ($my_integer == 12 || $my_string == "hola"){
    echo "El valor es 12\n";
}else {
    echo "El valor no es ni 11 ni 12\n";
}



?>
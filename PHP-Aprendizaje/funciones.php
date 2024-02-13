<?php

function print_number() {
    echo "10" . "\n";
}

print_number();
print_number();
print_number();


function print_number_with_parameter($my_number){
    echo $my_number . "\n";
}

print_number_with_parameter(10);

function print_number_with_typed_parameter(int $my_number){
    echo $my_number . "\n";
}

// Que se defina el tipo no implica un error en caso de encontrarse otro. 
// PHP hace la conversión siempre que puede
print_number_with_typed_parameter(11);
print_number_with_typed_parameter(10.5);

?>
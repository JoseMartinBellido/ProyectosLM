<?php

class MyClass {
    public $name;
    public $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
}

// Creación de clase
$my_class = new MyClass("Jose", 30);
print_r($my_class);
// Acceso a un valor del objeto
echo $my_class->name . "\n";
// Modificación del valor del objeto
$my_class->name = "Jose Martín Bellido";
echo $my_class->name . "\n";
echo gettype($my_class);
?>
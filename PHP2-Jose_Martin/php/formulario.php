<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/styles.css">
    <title>Comprobando datos</title>
</head>
<body>
    <main id="seccion2">
        <h1>Tus Datos de suscripción: </h1>
        <p>Estos son los datos que nos has enviado:</p>
        <?php
            // Datos de texto
            echo "Usuario: " . $_POST['user'] . "<br/>";
            echo "Contraseña: " . $_POST['pass'] . "<br/>";
            echo "Nombre: " . $_POST['name'] . "<br/>";
            echo "Dirección: " . $_POST['address'] . "<br/>";
            echo "Email: " . $_POST['email'] . "<br/>";
            echo "Hobby: " . $_POST['hobby'] . "<br/>";
            
            // Datos introducidos por otros tipos de inputs
            // Fecha de comienzo de hobby
            if (isset($_POST['fechaComienzo'])){
                echo "Fecha de comienzo del hobby: " . $_POST['fechaComienzo'] . "<br/>";
            }

            // ¿Se comparte el hobby?
            if (isset($_POST['compartirHobby'])){
                echo "¿Comparte su hobby con otra persona?: " . $_POST['compartirHobby'] . "<br/>";
            }

            // ¿Desea comenzar una nueva afición?
            if (isset($_POST['nuevaAficion'])){
                echo "Desea comenzar una nueva afición: " . $_POST['nuevaAficion'] . "<br/>";
            }

            // Lenguajes de programación favoritos
            echo "Sus lenguajes de programación favoritos son: <br/><ul>";
            if (isset($_POST['html'])){
                echo "<li>" . $_POST['html'] . "</li><br/>";
            }
            if (isset($_POST['css'])){
                echo "<li>" . $_POST['css'] . "</li><br/>";
            }
            if (isset($_POST['javascript'])){
                echo "<li>" . $_POST['javascript'] . "</li><br/>";
            }
            if (isset($_POST['php'])){
                echo "<li>" . $_POST['php'] . "</li><br/>";
            }
            if (isset($_POST['java'])){
                echo "<li>" . $_POST['java'] . "</li><br/>";
            }
            if (isset($_POST['python'])){
                echo "<li>" . $_POST['python'] . "</li><br/>";
            }
            if (isset($_POST['c'])){
                echo "<li>" . $_POST['c'] . "</li><br/>";
            }
            if (isset($_POST['c++'])){
                echo "<li>" . $_POST['c++'] . "</li><br/>";
            }
            echo "</ul>";

            // Buzón de sugerencias
            echo "Mensaje en el buzón de sugerencias: <br/>" . $_POST['buzonSugerencias'] . "<br/>";
        ?>
        
        <p>Comprueba tus datos antes de enviarlos, si no están bien vuelve a escribirlos.</p>
        <p>Los datos son correctos: <a href="../enviar.html">Enviar</a>
        <p>Los datos no son correctos: <a href="../index.html">Volver a escribirlos</a>

    </main>
    

</body>
</html>


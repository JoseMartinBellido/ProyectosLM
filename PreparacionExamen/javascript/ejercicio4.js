

let intervaloRedireccion = setInterval(redirige, 1000 * 30);

// Función que redirecciona la web en caso de que el usuario no esté contento con ella
function redirige(){
    let gustaPaginaWeb;
    // Solicitamos una respuesta al usuario hasta que inserte un valor adecuado
    do{
        // Solicitamos la respuesta al usuario
        gustaPaginaWeb = prompt('¿Te gusta la página web? (s/n)');
        // Se realiza la acción en caso de que sea una respuesta correcta
        if (gustaPaginaWeb === 's'){
            alert('Nos alegra que le guste la página web.');
        } else if (gustaPaginaWeb === 'n'){
            alert('Sentimos que no le haya gustado. Será redirigido a la web del IES Pablo Picasso.');
            window.location.href = 'https://fpiespablopicasso.es/'
        } else {
            alert('Lo sentimos. No ha introducido una opción válida.')
        }
    } while (gustaPaginaWeb !== 's' && gustaPaginaWeb !== 'n')

}
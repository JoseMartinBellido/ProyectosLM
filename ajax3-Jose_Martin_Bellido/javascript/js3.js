// Empresa con Ajax
empresa2.addEventListener("click",() =>{
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
     
        // Elimina el contenido de los nodos si existe
        const nodo = document.querySelector("iframe");
        const tituloMapa = document.getElementById('titulo-mapa');
        if (nodo && tituloMapa){
            nodo.style.display = 'none';
            tituloMapa.style.display = 'none';
        }
        document.querySelector('section').style.backgroundImage = "url('../images/fondo.jpg')";
        setText("prueba", this.responseText);
    }
    xhttp.open("GET", "../txt/empresa.txt", true);     
    xhttp.send(); 
})


// Tarifas con Ajax
tarifas.addEventListener("click",() =>{
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const nodo = document.querySelector("iframe");
        const tituloMapa = document.getElementById('titulo-mapa');
        if (nodo && tituloMapa){
            nodo.style.display = 'none';
            tituloMapa.style.display = 'none';
        }
        document.querySelector('section').style.backgroundImage = "url('../images/fondo.jpg')";

        setText("prueba", this.responseText);
    }

    xhttp.open("GET", "../txt/tarifas.txt", true);     
    xhttp.send();         
}) 


function setText(element, text) {
    document.getElementById(element).innerHTML = text;
    document.getElementById(element).style.fontSize = "1.4rem";
    document.getElementById(element).style.margin = "100px";
    document.getElementById(element).style.textAlign = "justify";
}
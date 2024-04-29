// Empresa con Ajax

empresa2.addEventListener("click",() =>{
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
     
        // Elimina el contenido de los nodos si existe
        const nodo = document.getElementsByClassName("contenido")
        if (nodo){
            nodo[0].style.display = "none";
        }
  
        setText("prueba", this.responseText);
    }
    xhttp.open("GET", "../txt/empresa.txt", true);     
    xhttp.send(); 
})


// Tarifas con Ajax
        

tarifas.addEventListener("click",() =>{
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const nodo = document.getElementsByClassName("contenido")
        if (nodo){
            nodo[0].style.display = "none";
        }
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
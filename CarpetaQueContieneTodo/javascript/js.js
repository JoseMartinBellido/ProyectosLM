
// Botones por clase
let botonesDocument = document.getElementsByClassName('boton');
let botones = [];

// Botones por id
let botonPorId = document.getElementById('por-id');

// Documento
for (let i = 0; i < botonesDocument.length; i++){
    botones.push(botonesDocument[i]);
}
botones.push(botonPorId);

botonPorId.addEventListener('click', recogeBoton);

function recogeBoton(evento){
    let clickado = evento.target;
    console.log(clickado);
}

// Reloj

let reloj = document.getElementById('reloj');

let timer = setInterval(cuentaReloj, 1000);

function cuentaReloj(){
    let ahora = new Date();
    reloj.textContent = `${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`;
    reloj.textContent += `  ${ahora.getDate()}/${ahora.getMonth()}/${ahora.getFullYear()}`
}


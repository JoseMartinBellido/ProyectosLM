
// Elementos
const textoError = document.getElementById('texto-error');
const btnEnviar = document.getElementById('btn-enviar');
const selectorDificultad = document.getElementById('selector-dificultad');
const inputNumeroPreguntas= document.getElementById('numero-preguntas');
const dificultad = document.getElementById('dificultad');
    
// Evita el redireccionamiento por un número de preguntas erróneo
btnEnviar.addEventListener('click', (event) => {


    if (inputNumeroPreguntas.value > 50 || inputNumeroPreguntas.value < 1) {
        textoError.style.display = 'block';
        selectorDificultad.style.marginTop = '0';
        event.preventDefault();
    
    } else {
        document.cookie= "numPreguntas=" + inputNumeroPreguntas.value;
        document.cookie = "dificultad=" + dificultad.value;
    }
})


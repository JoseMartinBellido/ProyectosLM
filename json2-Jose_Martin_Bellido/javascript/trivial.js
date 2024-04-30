
// Se obtienen los elementos para solicitar las preguntas
let cookies = document.cookie.split(';');
let numPreguntas = getCookie('numPreguntas');
let dificultad = getCookie('dificultad');
let tematica = getCookie('tematica');
console.log(cookies);   

// Función para obtener la cookies
function getCookie(cookieName) {
    let decodedCookie = decodeURIComponent(document.cookie);

    let cookiesArray = decodedCookie.split('; ');

    // Se recorren las cookies buscando la igualdad 
    for(let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i];

      if (cookie.split('=')[0].includes(cookieName)){
        return cookie.split('=')[1];
      }
    }
    // Si llega hasta aquí, no hay cookie con ese nombre
    return "";
  }

// Se modifica el título según la temática
let titulo = document.getElementById('titulo-trivial');
let tematicas = {
    '9' : 'Cultura general',
    '10' : 'Libros',
    '11' : 'Películas',
    '12' : 'Música', 
    '13' : 'Musicales y Teatro',
    '14' : 'Televisión',
    '15' : 'Videojuegos',
    '16' : 'Juegos de mesa',
    '17' : 'Ciencia y Naturaleza',
    '18' : 'Informática',
    '19' : 'Matemáticas',
    '20' : 'Mitología',
    '21' : 'Deportes',
    '22' : 'Geografía',
    '23' : 'Historia',
    '25' : 'Arte',
    '27' : 'Animales',
    '28' : 'Vehículos',
    '29' : 'Comics',
    '30' : 'Ciencia: Inventos',
    '31' : 'Anime y Manga',
    '32' : 'Dibujos animados',
}
titulo.innerHTML = 'Trivial - ' + tematicas[tematica];

// Variables necesarias para el programa
let main = document.getElementById('trivial');
let btnResultados = document.querySelector('#trivial button');

let respuestas = [];
let respuestasCorrectas = [];
let respuestasIncorrectas = [];
let pregunta, radioDoc, labelDoc;

// Acceso a la api
let url = `https://opentdb.com/api.php?amount=${numPreguntas}&category=${tematica}&difficulty=${dificultad}`;

let xhttp = new XMLHttpRequest();
xhttp.open('GET', url);
xhttp.send();
xhttp.onreadystatechange= function  () {

    if(this.readyState==4 && this.status==200)
    {
        let data = JSON.parse(this.responseText).results;
        for (let i in data) {

            // Impresión de pregunta
            pregunta = data[i].question;
            printPregunta((Number(i) + 1) + ".- " + pregunta);

            // Almacenamiento de respuestas (correcta e incorrectas)
            respuestas = [];
            respuestas.push(data[i].correct_answer);

            for (let respuestaIncorrecta of data[i].incorrect_answers){
                respuestas.push(respuestaIncorrecta);
            }
            // Se "baraja el array"
            respuestas = respuestas.sort((a, b) => 0.5 - Math.random());

            printRespuestas(data, i, respuestas);
        }

        // Se añade un botón para ver las respuestas
        addBtnResultados();
    }
}

// Función que imprime la pregunta
function printPregunta(pregunta) {
    pregunta = pregunta.replace('&#039;', '\'');

    let preguntaDoc = document.createElement('p');
    preguntaDoc.style.fontSize = '1.1rem';
    preguntaDoc.innerHTML = pregunta;
    
    preguntaDoc.style.display = 'block';
    main.appendChild(preguntaDoc);
}

// Función que imprime las respuestas a una pregunta
function printRespuestas(data, i, respuestas) {
    // Se imprimen las opciones
    for (let resp of respuestas) {
        let div = document.createElement('div');

        // Se crea un radiobutton y una etiqueta con opción
        radioDoc = document.createElement('input');
        radioDoc.setAttribute('type', 'radio');

        labelDoc = document.createElement('label');
        labelDoc.style.fontSize = '1rem';

        // Se almacena la respuesta dependiendo de si es correcta o no
        data[i].correct_answer == resp ? respuestasCorrectas.push(labelDoc) : respuestasIncorrectas.push(labelDoc);

        resp = resp.replace('&#039;', '\'');
        labelDoc.textContent = resp;

        // Se añaden las respuestas al div y cada div al main del html
        div.appendChild(radioDoc);
        div.appendChild(labelDoc);
        
        div.style.margin = '0.5rem 0';

        main.appendChild(div);
    }
}

function addBtnResultados(){
    btnResultados = document.createElement('button');
    btnResultados.textContent = 'Resolver';

    btnResultados.style.width = '10vw';
    btnResultados.style.marginLeft = '50vw';
    btnResultados.style.marginBottom = '1rem';
    btnResultados.style.padding = '0.7rem';
    btnResultados.style.backgroundColor = 'white';
    btnResultados.style.fontWeight = '600';
    btnResultados.style.fontSize = '1rem';

    addEventosBtnResultados();
    
    main.appendChild(btnResultados);
}

// Función que añade los eventos al botón de resultados
function addEventosBtnResultados() {
    btnResultados.addEventListener('mouseover', () => {
        btnResultados.style.color = '#11d3f8'
        btnResultados.style.backgroundColor = 'rgb(248, 250, 255)';
        btnResultados.style.cursor = 'pointer';
    });

    btnResultados.addEventListener('mouseout', () => {
        btnResultados.style.color = 'black'
        btnResultados.style.backgroundColor = 'white';
        btnResultados.style.cursor = 'unset';
    });

    btnResultados.addEventListener('click', () => {
        respuestasCorrectas.forEach(element => {
            element.style.color = 'green';
            element.style.fontWeight = '700';
            btnResultados.style.display = 'none';
        });
        respuestasIncorrectas.forEach(element => {
            element.style.color = 'red';
            element.style.fontWeight = '300';
        })
    })
}
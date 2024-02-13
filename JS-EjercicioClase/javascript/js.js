
let parrafos = document.querySelectorAll('p');

for (let i = 0; i < parrafos.length; i++){
    console.log(parrafos[i].textContent == 'Hola!!!')
    if (parrafos[i].innerHTML == 'Hola!!!'){
        parrafos[i].style.color = 'red';
    }

}
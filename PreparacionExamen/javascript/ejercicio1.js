
// Apartado A
let array = [];
for (let i = 0; i < 50; i++){
    array.push(Math.ceil(Math.random() * 120));
}

// Apartado B y C
let mayoresQue50 = '';
let menoresQue40 = '';
let maximo = array[0];
let minimo = array[0];
let media = 0;
for (let i = 0; i < array.length; i++){
    if (array[i] > 50){
        mayoresQue50 += `${array[i]} `;
    }
    if (array[i] < 40){
        menoresQue40 += `${array[i]} `;
    }

    if (maximo < array[i]){
        maximo = array[i];
    }

    if (minimo > array[i]){
        minimo = array[i];
    }

    media += array[i];
}

mayoresQue50 = mayoresQue50.substring(1);
menoresQue40 = menoresQue40.substring(1);
media = media / array.length;

alert(mayoresQue50);
alert(menoresQue40);
alert(`El máximo es ${maximo}, el mínimo es ${minimo} y la media es ${media}`);


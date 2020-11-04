$(document).ready(function(){

    console.log('hello');

/*
A partire da un array di oggetti, creare una copia dell’array e
aggiungere ai singoli elementi dell’array una nuova
proprietà “position” che contiene una lettera casuale.
*/



    const animals = [
        {
            name : 'pippo',
            type : 'dog',
            age : 5,
        },
        {
            name : 'silvestro',
            type : 'cat',
            age : 7,
        },
        {
            name : 'beep-beep',
            type : 'roadrunner',
            age : 4,
        },
    ];

    const newAnimals = animals.map((element, index) => {
        console.log(element);
        console.log(index);
        return element;
    });






});

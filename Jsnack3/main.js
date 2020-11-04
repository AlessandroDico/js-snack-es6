$(document).ready(function(){

    console.log('hello');

/*
A partire da un array di oggetti, creare una copia dell’array e
aggiungere ai singoli elementi dell’array una nuova
proprietà “position” che contiene una lettera casuale.
*/

const generateRandomLetter = () => {

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const letterRnd = alphabet[Math.floor(Math.random() * alphabet.length)];

    return letterRnd;
};

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



//scorro tutto l'array e ad ogni elemento aggiungo una chiave position
    newAnimals.forEach((element, index) => {
        element.position = generateRandomLetter();
    });

    console.log(newAnimals);



});

$(document).ready(function(){

    console.log('hello');

/*
Creare un array di nomi e chiedere all’utente due numeri.
Creare un nuovo array con i valori che si trovano in una
posizione compresa tra i due numeri inseriti dall’utente.
*/

const names = ['pippo', 'mario', 'luca', 'pluto', 'maria', 'marco', 'paola', 'giovanna', 'piera', 'mimmo'];

let rangeNumbers = [];

//CHIEDO DUE NUMERI ALL'UTENTE + CONTROLLI
do {
        var userNumbers = parseInt(prompt('inserisci un numero da 1 a 10'));
        if (isNaN(userNumbers) || userNumbers <= 0 || userNumbers > 10) {
            alert('numero non valido')
        } else {
            rangeNumbers.push(userNumbers - 1);
            // metto userNumbers - 1 in modo da farlo combaciare con le posizioni dell'array in conteggio "umano"
        }

    } while ((isNaN(userNumbers) || userNumbers < 0 || userNumbers > 10 || rangeNumbers.length < 2));

// MI ASSICURO CHE I NUMERI SIANO IN ORDINE CRESCENTE
const orderNumbers = rangeNumbers.sort(function(a, b){return a-b});
console.log(orderNumbers);

//I NUMERI MESSI DALL'UTENTE CREANO IL RANGE.. DEVO PRENDERE GLI ELEMENTI DELL'ARRAY CON INDICE INIZIALE IL NUMERO PIU' PICCOLO E COME INDICE FINALE IL NUMERO PIU' GRANDE
//  QUINDI SE UN NUMERO è UGUALE O MAGGIORE DEL NUMERO MINIMO E UGUALE O MINORE DEL NUMERO MASSIMO PUO' ESSERE MESSO NELL'ARRAY
// PROVO CON UN FILTER


    const nameRange = names.filter((element, index) => {

        if (index >= rangeNumbers[0] && index <= rangeNumbers[1]) {
            return element;
        }
    });

    console.log(nameRange);


});

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

const nameRange = name.filter((element, index) =>);

    if (element) {

    }
});

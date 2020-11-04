$(document).ready(function(){

    // console.log('hello');

/*
Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.


Stampare a schermo la bici con peso minore.
*/

//------------------------------- SOLUZIONE UNO-------------------------

    const bikes = [
        {
            name : 'Bianchi',
            weight : 9.1,
        },
        {
            name : 'Specialized',
            weight : 8.4,
        },
        {
            name : 'Cannondale',
            weight : 8.1,
        },
        {
            name : 'Colnago',
            weight : 9.3,
        },
    ];



//come prima soluzione farò due array separati per quanto riguarda il nome e il peso...troverò il numero minore nell'array dei pesi e poi tramite indici troveò il nome bici corrispondente

    const allWeights = [];
    const allNames = [];


    bikes.forEach((item, i) => {
        // console.log(item.weight);
        allWeights.push(item.weight);
        allNames.push(item.name);
    });

    // console.log(allWeights);
    // console.log(allNames);

//per trovare il numero inferiore in un array è sufficiente mettere la funzione più tre puntini e il nome dell'array in questione
    const minWeight = Math.min(...allWeights);
    console.log(minWeight);

//trovo l'indice relativo al numero più piccolo
    const indexLessWeight = allWeights.indexOf(minWeight);
    // console.log(indexLessWeight);

//trovo il nome bici corrispondente all'indice del peso minore
    const bikeLessWeight = allNames[indexLessWeight];
    console.log(bikeLessWeight);

    $('.container').append(`la bici con peso minore è ${bikeLessWeight} con un peso di ${minWeight}`);


//--------------------SOLUZIONE DUE-----------------------

    const bikes2 = [
        {
            name : 'Bianchi',
            weight : 9.1,
        },
        {
            name : 'Specialized',
            weight : 8.4,
        },
        {
            name : 'Cannondale',
            weight : 8.1,
        },
        {
            name : 'Colnago',
            weight : 9.3,
        },
    ];

//stabilisco il peso iniziale uguale al peso della prima bici
    let startWeight = bikes2[0].weight;
    let startName = bikes2[0].name;
    // console.log(startWeight);


//ora dovrò ciclare tutte le bici e capire se il peso della bici corrente è inferiore al peso iniziale.. in quel caso dovrò modificare il valore al peso iniziale
//poi dovrò far combaciare il peso alla bici corretta

    bikes2.forEach((item, i) => {

        if (item.weight < startWeight) {
            startWeight = item.weight;
            startName = item.name;
        }
    });

    console.log(startWeight);
    console.log(startName);

    $('.container2').append(`la bici con peso minore è ${startName} con un peso di ${startWeight}`);


//--------------SOLUZIONE TRE ----------------
//CON DESTRUCTURING E TEMPLATE LITERAL
//TEMPLATE LITERAL L'HO GIA USATO NELLE ALTRE SOLUZIONI DEVO QUINDI USARE DESTRACTURING



    const bikes3 = [
        {
            name : 'Bianchi',
            weight : 9.1,
        },
        {
            name : 'Specialized',
            weight : 8.4,
        },
        {
            name : 'Cannondale',
            weight : 8.1,
        },
        {
            name : 'Colnago',
            weight : 9.3,
        },
    ];

    let finalArray3 = {
        name : 'Bianchi',
        weight : 9.1,
    };



//ora dovrò ciclare tutte le bici e capire se il peso della bici corrente è inferiore al peso iniziale.. in quel caso dovrò modificare il valore al peso iniziale
//poi dovrò far combaciare il peso alla bici corretta

    bikes3.forEach((item, i) => {
        // console.log(item);

        if (item.weight < finalArray3.weight) {
            finalArray3 = item;
        }

    });

    console.log(finalArray3);

    const {name, weight} = finalArray3;

    console.log(name, weight);

    $('.container3').append(`la bici con peso minore è ${name} con un peso di ${weight}`);

    // $('.container3').append(`la bici con peso minore è ${startName3} con un peso di ${startWeight3}`);




});

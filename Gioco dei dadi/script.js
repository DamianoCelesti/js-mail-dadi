// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?


// lista da dove prendere i numeri

const numeriDado = [1, 2, 3, 4, 5, 6];

// tiri random dell utente e del pc
const utenteTiro = numeriDado[Math.floor(Math.random() * numeriDado.length)];

const pcTiro = numeriDado[Math.floor(Math.random() * numeriDado.length)];


console.log(utenteTiro);
console.log(pcTiro);

// confronto di chi vince

if (utenteTiro > pcTiro) {
    console.log('il numero', utenteTiro, 'batte', pcTiro, 'utente vince');
} else if (pcTiro > utenteTiro) {
    console.log('il numero', pcTiro, 'batte', utenteTiro, 'pc vince');
} else {
    console.log(utenteTiro, pcTiro,'numeri uguali pareggio');
}
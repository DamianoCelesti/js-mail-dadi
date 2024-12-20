// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email

// lista di email invitati

const email = ['gino@gmail.it', 'paolo@gmail.it', 'luca@gmail.it', 'giacomo@gmail.it','luna@gmail.it'];

// chiedi all utente email

const emailInput = prompt('inserisci email');


// variabile per vedere se ce

let emailDaConf = false;


// ciclo for per vedere tutte le email e se sono uguali

for (let i = 0; i < email.length; i++) {
    if (emailDaConf[i] === emailInput) {
        emailDaConf = true;
        break;
    }

}

//stampa un messaggio appropriato
if (emailDaConf) {
    console.log('email registrata accedi');

} else {
    console.log('non puo ipartecipare')
}
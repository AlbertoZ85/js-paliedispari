// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. Inizializzazione variabili: 'utente' per il prompt; 'risultato' e 'bgc' ai valori di esito negativo della verifica della natura palindroma della parola
var utente = prompt('Inserisci una parola');
var risultato = 'Mmm... scelta banale';
var bgc = "#e60000";

// 2. Istruzione condizionale in caso di riscontro positivo, invocando la funzione palindroma
if (utente == palindroma(utente)) {
    risultato = 'Bella lì, hai beccato una palindroma!';
    bgc = "lightgreen";
}

// 3. Stampa a video del risultato
document.getElementById('esito').innerHTML = risultato;
document.getElementById('esito').style.backgroundColor = bgc;

// Creo una funzione che legge una parola di input e ne produce la versione palindroma nel seguente modo: un ciclo for salva in una variabile i caratteri della parola intesi come elementi di un array (stringa), letti a partire dalla fine, concatenandoli per creare la stringa palindroma
function palindroma(parola) {
    var reverse = '';
    for (var i = parola.length - 1; i >= 0; i--) {
        reverse += parola[i];
    }
    return reverse;
}

// Utente sceglie pari o dispari
const direzione = prompt("Scegli pari o dispari?");

// Utente inserisce un numero
const puntata = parseInt(prompt("Che numero punti?"));

// Sommiamo il numero random del pc con quello inserito dall'utente
const somma = puntata + pcNumber(1, 5);

// Questa somma è pari o dispari?
const resultSomma = even_odd(somma);

// console.log(somma);
// console.log(resultSomma);

const finalMsg = "";

if (resultSomma === "pari" && direzione === "pari")
  finalMsg = "Ha vinto l'utente";

console.log(finalMsg);

// Funzione per definire se un numero è pari o dispari
/**
 * Il numero è paro o disparo
 * @returns {string}
 */
function even_odd(num) {
  let risultato = "";

  if (num % 2 === 0) risultato = "paro";
  else if (num % 2 !== 0) risultato = "disparo";

  return risultato;
}

// Funzione per generare un numero random da min a max
/**
 * Numero random
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function pcNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Utente sceglie pari o dispari
const direzionePlayer = prompt("Scegli paro o disparo?");

// In base alla direzione scelta dall'utente scelgo la direzione del pc
const direzionePC = direzionePlayer === "paro" ? "disparo" : "paro";

// Utente inserisce un numero
const puntata = parseInt(prompt("Che numero punti?"));

const numPC = pcNumber(1, 5);

// Sommiamo il numero random del pc con quello inserito dall'utente
const somma = puntata + numPC;

// Questa somma è pari o dispari?
const resultSomma = even_odd(somma);

let finalMsg = "";

if (resultSomma === direzionePlayer)
  finalMsg = `Ha vinto l'utente inserendo ${puntata} e scegliendo ${direzionePlayer}, il pc ha inserito ${numPC} e puntato sul numero ${direzionePC}, la somma finale è uguale a ${somma} quindi il numero finale è ${resultSomma}.`;
else if (resultSomma === direzionePC)
  finalMsg = `Ha vinto il pc inserendo ${numPC} e scegliendo ${direzionePC}, l'utente ha inserito ${puntata} e puntato sul numero ${direzionePlayer}, la somma finale è uguale a ${somma} quindi il numero finale è ${resultSomma}.`;

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

// Input utente
const word = prompt("Inserisci una parola");

// Richiamo la funzione che controlla se la parola è palindroma

const resultPalindrome = isPalidrome(word);

const stringResult = resultPalindrome
  ? `La parola ${word} è Palindroma`
  : `La parola ${word} non è Palindroma`;

console.log(stringResult);

/**
 * Check if the word is palindrome
 * @param {string} word
 * @returns {boolean}
 */
function isPalidrome(word) {
  let newWord = word[word.length - 1];

  //   console.log(newWord);

  // Devo iterare la stringa dalla fine verso l'inizio
  for (let i = word.length - 1; i >= 0; i--) {
    // Carattere corrente della parola
    let currCar = word[i];
    if (i != word.length - 1) newWord += currCar;
  }

  //   console.log(newWord);

  return word === newWord;
}

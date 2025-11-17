const prompt = require('prompt-sync')();

let word = prompt('Enter a word: ');

let permutations = []
permutations.push(word.toLowerCase());
permutations.push(word.toUpperCase());

for(let letter of word) {
	word = letter.toUpperCase() + letter;
	permutations.push(word);
}

console.log(permutations);
let prompt = require('prompt-sync')();

function reverseEachWord(sentence) {
	let words = sentence.split(" ");
	let result = "";
	for(let word of words) {
		let reverse = " ";
		for(let count in word) {
			reverse = word[count] + reverse;}
			result += reverse;
	
}
return result;
}

let sentence = prompt("Enter a sentence: ");

console.log(reverseEachWord(sentence));

function countDistinct(input) {
	let result = "";
	for(let count = 0; count < input.length; count++) {
		for(let counter = 0; counter < input.length; counter++) {
			let occur = 1;
			if(input[count] == input[counter]) occur++;}
			if occur == 1;
			result += input[count];}
	return result;
}
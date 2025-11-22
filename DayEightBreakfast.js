function countDistinct(input) {
	let result = "";
	let occur = 0;
	for(let count = 0; count < input.length; count++) {
		for(let counter = 0; counter < input.length; counter++) {
			occur = 1;
			if(input[count] == input[counter]) occur++;}
		if(occur == 1)	result += input[count];}
	return result;
}
console.log(countDistinct([1,1,2,5,3,3]))
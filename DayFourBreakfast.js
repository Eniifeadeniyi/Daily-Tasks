const prompt = require('prompt-sync')();

function getMonthQuarter(month) {
	quarter = Math.ceil(month / 3);
	if(month < 1 || month > 12) return "Invalid!";
	return quarter;
}


let monthNumber = prompt('Enter number to represent a month: ');
console.log(getMonthQuarter(Number(monthNumber)))
const prompt = require('prompt-sync')();

let number = prompt("Enter a number: ");
function validate(input) {
    let check = []
    let valid = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "]
    for(let num of input) {
        if(valid.includes(num)) check.push(true)
        else check.push(false);}
    if(check.includes(false))return false;
    else return true;
}

while(!(validate(number))){
    console.log("Invalid input!")
    number = prompt("Enter a number: ");
}
number = Number(number);
console.log(arrayOfNumbers(number));
function arrayOfNumbers(number){
    let outuput = []
    for(let count = number; count > 0; count--){
        outuput.push(count);
    }
    return outuput;
}
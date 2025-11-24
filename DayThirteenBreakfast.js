const prompt = require('prompt-sync')();
function findNextSquare(number) {
    let root = number ** 0.5
    if(root % 2 == 0 && number % 2 == 0) return (root + 1) ** 2;
    if(root % 2 != 0 && number % 2 != 0) return (root + 1) ** 2;
    return -1;
}
function validate(input) {
    let check = []
    let valid = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "]
    for(let num of input) {
        if(valid.includes(num)) check.push(true)
        else check.push(false);}
    if(check.includes(false))return false;
    else return true;
}
let number = prompt("Enter a number: ")
if(validate(number)) console.log(findNextSquare(Number(number)))

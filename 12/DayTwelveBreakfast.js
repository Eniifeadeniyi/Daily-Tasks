function makeArray(number){
    let numbers = []
    for(let digit of number){
        numbers.push(digit);
    }
    return numbers;
}
function bubbleSort(numbers) {
    for(let count = 0; count < numbers.length; count++){
        for(let counter = 0; counter < numbers.length; counter++){
            if(numbers[count] > numbers[counter]){
                let temp = numbers[count];
                numbers[count] = numbers[counter];
                numbers[counter] = temp;
            }
        }

    }
    return numbers.join("")
}

function validate(input) {
    let check = []
    let valid = [0,1,2,3,4,5,6,7,8,9]
    for(let num of input) {
        if(valid.includes(Number(num))) check.push(true)
        else check.push(false);}
    if(check.includes(false))return false;
    else return true;
}
const prompt = require('prompt-sync')();

let input = prompt("Enter a number: ");

while(!(validate(input))){
    console.log("Invalid input!");
    input = prompt("Enter a number: ");}

let numbers = makeArray(input);
console.log(bubbleSort(numbers));
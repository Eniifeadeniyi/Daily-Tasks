function validate(input) {
    let check = []
    let valid = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "]
    for(let num of input) {
        if(valid.includes(num)) check.push(true)
        else check.push(false);}
    if(check.includes(false))return false;
    else return true;
}
let prompt = require('prompt-sync')(); 
let input = prompt('Enter numbers spaced by one space: ').trim();
while(!(validate(input))) {
    console.log("Invalid input!")
    input = prompt('Enter numbers spaced by one space: ');
}

let numbers = input.split(" ")
let nums = numbers.map((number) => Number(number));

if(nums.length > 1) {
let max = nums[0];
let min = nums[0];
for(let num of nums){
    if(num > max) max = num;
}
for(let num of nums){
    if(num < min) min = num;
}
console.log(max,min);}

else console.log(input)
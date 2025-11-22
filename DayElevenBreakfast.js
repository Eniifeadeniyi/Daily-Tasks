let prompt = require('prompt-sync')(); 
let input = prompt('Enter numbers spaced by one space: ')
let numbers = input.split(" ")

let valid = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let validInput = numbers.filter((number) => number in valid)

let nums = validInput.map((number) => Number(number));
console.log(validInput)



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
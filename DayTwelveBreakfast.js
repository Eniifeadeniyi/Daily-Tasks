function makeArray(number){
    let numbers = []
    for(let digit of number){
        numbers.push(digit);
    }
    return numbers;
}
function bubblSort(numbers) {
    for(let count = 0; count < numbers.length; count++){
        for(let counter = 0; counter < numbers.length; counter++){
            if(numbers[count] < numbers[counter]){
                let temp = numbers[count];
                numbers[count] = numbers[counter];
                numbers[counter] = temp;
            }
        }

    }
    return numbers.join("")
}
let numbers = makeArray("54145")
console.log(bubblSort(numbers))
function inverse(numbers){
    let output = []
    for(let number of numbers){
        if(number > 0) output.push(number - number * 2);
        if(number < 0) output.push(number - number * 2);
    }
    return output;
}

console.log(inverse([1,-2,3,-4,5]));
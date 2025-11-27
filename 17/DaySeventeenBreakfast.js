function repeat(sentence){
    let output = "";
    for(let char of sentence){
        if(char != " "){
            output += char
            output += char;
        }
        else output += char;
    }
    return output;
}

console.log(repeat("Hello World"));
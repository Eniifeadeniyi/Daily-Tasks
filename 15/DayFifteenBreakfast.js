const prompt = require('prompt-sync')();
let attendance = []
let numberOfSheep = prompt("How many sheep do you have in total: ");
for(let count = 1; count <= numberOfSheep; count++){
    console.log("Enter 'true' if present and 'false' if absent");
    let present = prompt("Sheep " + count + ": ");
    while(present != "true" && present != "false") {
        console.log("Invalid input!");
        present = prompt("Sheep " + count + ": ");
    }
    attendance.push(Boolean(present));
}

let count = 0;
for(let sheep of attendance){
    if(sheep == true) count += 1
}
console.log(count + " present");
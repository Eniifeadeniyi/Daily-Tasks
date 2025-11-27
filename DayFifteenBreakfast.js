const prompt = require('prompt-sync')();
let attendance = []
let numberOfSheep = prompt("How many sheep do you have in total: ");
for(let count = 1; count <= numberOfSheep; count++){
    console.log("Enter 'true' if present and 'false' if absent");
    let present = prompt("Sheep " + count + ": ");
    
    while(present != "true" || present != "false") {
        console.log("Invalid input!");
        console.log(present);
        present = prompt("Sheep " + count + ": ");
    }
    attendance.push(Boolean(present));
}

console.log(attendance);
const prompt = require("prompt-sync")();

console.log("\n");

const age = parseInt(prompt("Please enter your age : "));

if(age <= 18)
{
    console.log("\nYou are too young to go beyond this point");
    console.log("***SAD FACE***");
}

console.log("\nEnd of Program");
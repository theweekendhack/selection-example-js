const prompt = require("prompt-sync")();

console.log("\n");

const age = parseInt(prompt("Please enter your age : "));


age<=18 ? console.log("\nYou are too young to go beyond this point")  : console.log("You have been granted access!!!!");


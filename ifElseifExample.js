const prompt = require("prompt-sync")();

console.log("\n")
const number1= parseInt(prompt("Pleasee enter a number: "));
const number2= parseInt(prompt("Pleasee enter another number: "));

const integerCode= parseInt(prompt( "Please enter 1 to add.-2 to substract.-3 to multiply.-4 divide : "));


if(integerCode === 1)
{
    const sum = number1 + number2;
    console.log(`\nThe sum of ${number1} + ${number2} = ${sum}`);
}

else if (integerCode ===2)
{

    const difference = number1 - number2;
    console.log(`\nThe difference of ${number1} - ${number2} = ${difference}`);

}

else if(integerCode===3)
{

    const product = number1 * number2;
    console.log(`\nThe product of ${number1} X ${number2} = ${product}`);
}

else if(integerCode===4)
{

    if(number2!=0)
    {
        const quotient = number1 / number2;
        console.log(`\nThe quotient of ${number1} / ${number2} = ${quotient}`);
    }

    else
    {
        console.log(`\nSorry, division by zero is not allowed!!!`);
    }

 
}


else 
{
    console.log(`\nSorry, you must enter 1,2,3 4 as a valid integer code`);
}





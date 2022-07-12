const readline = require("readline-sync")
const number1 = readline.question("enter first number")
console.log(number1)
const number2 = readline.question("enter second number")
console.log(number2)
const operations = ["Add (+)", "Sub (-)", "Mul (*)", " Div(/)"];
const index = readline.keyInSelect(operations, 'Choose your math operation');

if (index === "+" ) {
  console.log(add(number1 + number2))
}


function add(num1, num2) {
  return (Number(num1) + Number(num2));
};

console.log(add(2,2))


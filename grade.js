// //Student Grade
// name="Arjita";
// marks=90;
// grade="A";
// function Sum(name, ...numbers) {
//     sum operators
// }
// sum(Utkarsh,1,2,3,4)

// //Rest Operator- Collection
// let Array=[1,2,3,4,5,6,7,8,9];
// Function add(...numbers){
//     consol.log(number);
// }
// add(1,2,3,4,5);




// function fixedSum(name, ...numbers) {
//     fix(aj,2,3,4,5)

        //)

//     function greetAndSum(name, ...numbers) {
//     const total = numbers.reduce((sum, num) => sum + num, 0);
//     console.log(`Hello ${name}, Total = ${total}`);
// }
// greetAndSum("Utkarsh", 10, 20, 30, 40);


// function sum(name:any, ...args: any[]): void
function sum(name, ...args) {
    console.log(args);
    let total = 0;
    for(let i of args) {
        total += i;
    }
}

//create a rest operator that take input from user and provide the sum of all the numbers
function sumOfNumbers(name, ...numbers) {
    let total = 0;
    for(let num of numbers) {
        total += num;
    }
    console.log(`Hello ${name}, the sum of the numbers is: ${total}`);
}

let name={name: prompt("Enter your name: ")};
let input = prompt("Enter numbers separated by commas: ");
let number = input.split(',').map(Number);

sumOfNumbers(name.name, ...numbersArray);
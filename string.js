console.log("\n String methods ====");
let str ="Welcome JavaScript";
//1.toUpperCase()
console.log("Upper case = ", str.toUpperCase());
//2.toLowerCase()
console.log("Lower case = ", str.toLowerCase());
// 3.charAt()
console.log("Character at index 3 = ", str.charAt(3)); 
//4.IndexOf()
console.log("Index of Java= ", str.indexOf('Java'));
//5.lastIndexOf()
let message = "JavaScript is a easy language . JavaScript is powerful language ";
console.log(
    "Last index  =" ,
    message.lastIndexOf('JavaScript')
)
//6.slice()
console.log(
    "Slice =",
    str.slice(0,7)
)
//7.split()
let data = "HTML, CSS , JavaScript , ReactJS";
let result = data.split(',');
console.log("Split =", result);
//8.replace()
let text = "I love JavaScript";
console.log(
    text.replace('Java', 'JavaScript')
)
//9.concat()
//10.includes()
// var a ="string is good";
// console.log(a.includes('good')); ---> true 
// console.log(a.includes('bad')); ---> false


//Array methods
let numbers = [10,20,30,40,50];
console.log('numbers =', numbers);
//array methods 
console.log("\n Array methods ====");
//1.push()
numbers.push(60);
console.log('After push =', numbers);
//2.pop()
numbers.pop();
console.log('After pop =', numbers);
//3.shift()
numbers.shift();
console.log('After shift =', numbers);// removes first element of array
//4.unshift()
numbers.unshift(5);
console.log('After unshift =', numbers);// adds element at first position of array
//date object 
let date = new Date();
console.log(date);
console.log(
    "Year =",
    date.getFullYear()
)
//get date
console.log(
    "Date=",
    date.getDate()
);
//get month
console.log(
    "Month =",
    date.getMonth()
);
//math object 
console.log("\n Math object ====");
console.log("PI =", Math.PI);
//max value
console.log("Max value =", Math.max(10,20,30,40,50));
//min value 
console.log ("Min value =", Math.min(10,20,30,40,50));
// floor
console.log("Floor value =", Math.floor(4.7));
//round
console.log("Round value =", Math.round(4.7));
//ceil
console.log("Ceil value =", Math.ceil(6.7));
// power 
console.log("Power value =", Math.pow(2,4));
// square root
console.log("Square root =", Math.sqrt(64));
// cube root 
console.log("Cube root =", Math.cbrt(27));


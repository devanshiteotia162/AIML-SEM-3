// call back function
function greetUser(name , callback){
    console.log("Hello" + name);
    callback();
}
greetUser("Devanshi" , function(){
    console.log("Callback function executed!");
});
console.log("Start");
setTimeout(function () {   // setTimeout is a call back function that will execute after 2 seconds 
    console.log("Task completed !");
}, 2000);
console.log("End");

// synnchronous
console.log(10)
console.log(20)
console.log(30)
console.log(40)
console.log(50)

//async

console.log("Start ");
setTimeout(function (){

})

function printName(){
console.log("Devanshi");
}

//conasole.log("End");


function printName(name){
    setTimeout(function(){
        console.log(name);
    }, 2000);
}
printName("Devanshi");
printName("Hello");


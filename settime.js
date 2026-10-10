console.log("start ");
setTimeout(() => {
    console.log("timeout");

}, 2000)
setImmediate (() => 
console.log ("Immediate "

))
process.nextTick(() =>{
console.log("Next tick")
})
console.log("Exit")

fstat.appendFile(
    "std.txt",
    "\nAge: 28",
    (err , data )=> {
        if (err){
            console.log(err)
        }
        else {
            
        }
    }
)
// var Maths= 90
// var English= 80
// var Science= 70
// var total=totalMarks(Maths,English,Science);
// var perc=percentage(total);
// console.log("The percentage is", perc);

function totalMarks(math,english,science) {
    return math+english+science;
}
function percentage(total) {
    return (total/300)*100;
}
let total=totalMarks(90,80,70);
let perc=percentage(total);
console.log("The percentage is", perc);
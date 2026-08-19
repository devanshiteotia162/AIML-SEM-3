let arr= [10,20,30,40,50];
let sum=0;
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
    sum+=arr[i];
}
console.log("The sum of array is", sum);
//2d array

let student=[
    ["arjita",20,"A"],
    ["john",22,"B"],
    ["glossy",19,"C"]
];
for(let i=0; i<student.length; i++){
    for(let j=0; j<student[i].length; j++){
        for(let k=0; k<student[i][j].length; k++){
            console.log(student[i][j][k]);
        }
    }
}
class hello{
    name ="Devanshi";
    show(){
        console.log("Hello " + this.name);

    }
    constructor(){

    }
}
let obj=new hello();
obj.show();


class student {
    constructor( rollNo , name , age) {
        this.rollNo = rollNo;
        this.name = name;
        this.age = age;
        console.log ("Roll No : " + this.rollNo);
        console.log ("Name : " + this.name);
        console.log ("Age : " + this.age);

    }
}
let s = new student ();
let s1 = new student (63 , "Devanshi " , 19);
let s2 = new student (64 , "arjita " , 15);


// // static property 
// class Hello3 {
//     static name = "Example of static variable and method ";
//     static show (){
//         consoole.log("Hello class this is : " +Hello3.name);
//     }
// }
// Hello3.show();


// // static method with static variables 
// class Hello4{
//     static name = "Example of static variable without static variable ";
//     static show (){
//         console.log("Hello class this is : " +Hello4.name)
//     }
// }
// Hello4.show();

// class Hello5 {
//     static name = "Example of static variable and instance variable ";
//     constructor(){
//         this.instanceVar = "Instance Variable ";

//     }
//     show (){
//         console.log("Static variable : " +Hello5.name);
//         console.log("Instance Variable " + this.instanceVar);

//     }
// }
// let h5 = new Hello5();
// h5.show();




// // static method with instance method without constructor



// h6.show();
// class student2{
//     static name = "Devanshi ";

// }
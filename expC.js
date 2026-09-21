class employee{
    constructor(id,name,Salary){
        this.id=id;
        this.name=name;
        this.Salary=Salary;
    }

    calculateSalary(){
        return this.Salary;
    }
}

class Manager extends employee{
    constructor(id,name,Salary,bonus){
        super(id,name,Salary);
        this.bonus=bonus;
    }

    calculateSalary(){
        return this.Salary + this.bonus;
    }
}
let emp1 = new employee(1,"John",50000);
let emp2 = new Manager(2,"Jane",60000,10000);

console.log(`Employee: ${emp1.name}, Salary: ${emp1.calculateSalary()}`);
console.log(`Manager: ${emp2.name}, Salary: ${emp2.calculateSalary()}`);
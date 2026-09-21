class Student {
    // Static property to track total students created
    static totalStudents = 0;

    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        // Increment count every time a new instance is created
        Student.totalStudents++;
    }

    // Instance method to display student details and check pass status
    displayResult() {
        const passStatus = this.marks >= 40 ? "Passed" : "Failed";
        console.log(`Roll No: ${this.rollNo} | Name: ${this.name} | Marks: ${this.marks} | Result: ${passStatus}`);
    }

    // Static method to display the total count of students
    static displayTotalStudents() {
        console.log(`Total Students Registered: ${Student.totalStudents}`);
    }
}

// 1. Create at least three Student objects
const student1 = new Student(101, "Alice Smith", 85);
const student2 = new Student(102, "Bob Jones", 38);
const student3 = new Student(103, "Charlie Brown", 74);

// 2. Demonstrate instance methods
console.log("--- Student Results ---");
student1.displayResult();
student2.displayResult();
student3.displayResult();

// 3. Demonstrate static method
console.log("\n--- System Summary ---");
Student.displayTotalStudents();
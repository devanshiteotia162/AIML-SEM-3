class BankAccount {
    // Static property for bank name
    static bankName = "International Trust Bank";

    // Constructor to initialize the account properties
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    // Instance method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        }
    }

    // Instance method to withdraw money with balance check
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Withdrawal of $${amount} Denied: Insufficient funds.`);
        } else if (amount > 0) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. Remaining Balance: $${this.balance}`);
        }
    }

    // Instance method to display account details
    displayDetails() {
        console.log(`Account: ${this.accountNo} | Holder: ${this.holderName} | Balance: $${this.balance}`);
    }

    // Static method to display general bank information
    static bankInfo() {
        console.log(`Welcome to ${BankAccount.bankName}`);
        console.log("General Info: Open Mon-Fri, 9 AM - 4 PM.");
    }
}

// --- Demonstration ---

// 1. Call the static method
BankAccount.bankInfo();
console.log("---------------------------------------");

// 2. Create two account objects
const acc1 = new BankAccount("BNK001", "Alex Mercer", 500);
const acc2 = new BankAccount("BNK002", "Sarah Connor", 1200);

// 3. Demonstrate methods on Account 1
acc1.displayDetails();
acc1.deposit(150);
acc1.withdraw(700); // Fails (700 > 650)
acc1.withdraw(200); // Succeeds
acc1.displayDetails();
console.log("---------------------------------------");

// 4. Demonstrate methods on Account 2
acc2.displayDetails();
acc2.withdraw(500);
acc2.displayDetails();

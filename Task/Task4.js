// Task 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Task 2 =================================

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Task 3 ================================

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

 
// Task 4 ==================================

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// Task 5 ===================================

let tableNumber = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}


// Task 6 =================================

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


// Task 7 ===================================

let number7 = 1;
let sum = 0;

while (number7 <= 10) {
    sum = sum + number7;
    number7++;
}

console.log(sum);


// Task 8 =======================================

let number8 = 1;

do {
    console.log(number8);
    number8++;
} 
while (number8 <= 5);


// Task 9 ==================================

let a9 = 10;

do {
    console.log(a9);
    a9++;
} while (a9 <= 5);


// Task 10 ===============================

let name10 = "javascript";

for (let character of name10) {
    console.log(character);
}


// Task 11 =================================

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}


// Task 12 ================================

let studentNames = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

for (let student of studentNames) {
    console.log("Student:", student);
}


// Task 13 =================================

let employee13 = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee13) {
    console.log(key, employee13[key]);
}


// Task 14 ========================================

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}


// Task 15 =====================================

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


// Task 16 ======================================

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");


// Task 17 =======================================

function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Arun", 23, "ECE");
student("Priya", 24, "IT");
student("Kumar", 22, "CSE");


// Task 18 =======================================

function add(a, b) {
    return a + b;
}

let result18 = add(10, 20);

console.log(result18);


// Task 19 ======================================

function salary(amount) {
    return amount;
}

let salaryAmount = salary(50000);

console.log(salaryAmount);


// Task 20 =====================================

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let totalSalary = bonus(50000, 5000);

console.log(totalSalary);


// Task 21 ========================================

function employee21(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employee21("Arun");
employee21("Priya", "Designer");


// Task 22 ===================================

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(4));
console.log(square(5));
console.log(square(7));
console.log(square(10));


// Task 23 =======================================

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));


// Task 24 =====================================

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 5));


// Task 25 ==================================

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    // console.log(b);
    // console.log(c);
}

test();


// Task 26 ========================================

console.log(a26);
var a26 = 10;


// Task 27 ================================

// console.log(b27);
// let b27 = 20;


// Task 28 ================================

// console.log(c28);
// const c28 = 30;


// Task 29 ====================================

(function() {
    console.log("Welcome to JavaScript");
})();

(function(product, discount) {
    console.log(
        `Now going on sale, ${product}. The discount is ${discount}%`
    );
})("Shoes", 50);


// Task 30 ====================================

function welcome30() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome30);


// Task 31

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let allCashback = cashback();

for (let cash of allCashback) {
    console.log(cash);
}


// Task 32

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    },
    {
        name: "Divya",
        age: 26,
        department: "IT",
        role: "Tester",
        salary: 38000
    }
];

for (let employee of employees) {
    console.log(employee);
}

for (let employee of employees) {
    for (let key in employee) {
        console.log(key, employee[key]);
    }
}

function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

for (let employee of employees) {
    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}

function getSalary(employee) {
    return employee.salary;
}

for (let employee of employees) {
    let employeeSalary = getSalary(employee);

    console.log(employee.name, employeeSalary);

    if (employeeSalary >= 40000) {
        console.log(employee.name, "Salary is 40000 or above");
    } else {
        console.log(employee.name, "Salary is below 40000");
    }
}

let calculation = (salary) => {
    return salary * 12;
};

console.log(calculation(40000));

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}
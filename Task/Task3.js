//=========================================
//...Task 1
//=========================================

var Name="Vanishree"
let Age=23
const city = "Trichy";
var college = "ABC College";

console.log(Name);
console.log(Age);
console.log(city);
console.log(college);

name = "Deivanai";
age = 30;

console.log(name);
console.log(age);

// city = "Salem";

var name = "shree";
// let age = 35;
// const city = "Chennai";

//Task 2

console.log("Moorthy");
alert("Java Full Stack Developer")
let confirmed= confirm("Are you a Java Developer")
console.log(confirmed);
let names=prompt("Enter name" )
console.log(names);
document.writeln("Javascript")

//...Task 3

let Name1=prompt("Enter Name1")
console.log(Name1);
let Age1=prompt("Enter Age1")
console.log(Age1);
let city1=prompt("Enter City1")
console.log(city1);
let Qualification1=prompt("Enter Qualification1")
console.log(Qualification1);


// Task 4

let language = "JavaScript";
let number = 100;
let decimal = 99.5;
let valueTrue = true;
let valueFalse = false;
let valueUndefined;
let valueNull = null;

console.log(language, typeof language);
console.log(number, typeof number);
console.log(decimal, typeof decimal);
console.log(valueTrue, typeof valueTrue);
console.log(valueFalse, typeof valueFalse);
console.log(valueUndefined, typeof valueUndefined);
console.log(valueNull, typeof valueNull);


// Task 5

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log(students[0]);
console.log(students[1]);
console.log(students[students.length - 1]);
console.log(students.length);


// Task 6

let employee = {
    name: "Prithviraj",
    age: 27,
    role: "Software Engineer",
    skills: ["JavaScript", "HTML", "CSS"],
    isWorking: true,
    qualification: ["B.E", "M.E"]
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.skills[0]);
console.log(employee.qualification[employee.qualification.length - 1]);
console.log(employee.isWorking);


// Task 7

let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// Task 8

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let totalPrice = shirt + pant + shoes + bag;

console.log(totalPrice);


// Task 9

let a1 = 10;
let b1 = a1++;

console.log(a1);
console.log(b1);

let a2 = 10;
let b2 = ++a2;

console.log(a2);
console.log(b2);

let a3 = 10;
let b3 = a3--;

console.log(a3);
console.log(b3);

let a4 = 10;
let b4 = --a4;

console.log(a4);
console.log(b4);


// Task 10

let num = 10;

num += 5;
console.log(num);

num -= 3;
console.log(num);

num *= 2;
console.log(num);

num /= 4;
console.log(num);

num %= 3;
console.log(num);

num **= 2;
console.log(num);


// Task 11

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");


// Task 12

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// Task 13

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// Task 14

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));


// Task 15

console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");


// Task 16

let votingAge = 20;

let votingResult = votingAge >= 18
    ? "Eligible to vote"
    : "Not eligible";

console.log(votingResult);


// Task 17

let password = true;

let loginResult = password
    ? "Login successful"
    : "Wrong password";

console.log(loginResult);


// Task 18

let userName18 = "Selvakumar";
let age18 = 25;
let city18 = "Trichy";

console.log(
    "My name is " + userName18 +
    ". I am " + age18 +
    " years old. I live in " + city18 + "."
);

console.log(
    `My name is ${userName18}. I am ${age18} years old. I live in ${city18}.`
);


// Task 19

let stringNumber = String(100);
let stringBoolean = String(true);
let stringUndefined = String(undefined);
let stringNull = String(null);
let stringArray = String([1, 2]);

console.log(stringNumber, typeof stringNumber);
console.log(stringBoolean, typeof stringBoolean);
console.log(stringUndefined, typeof stringUndefined);
console.log(stringNull, typeof stringNull);
console.log(stringArray, typeof stringArray);


// Task 20

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));


// Task 21

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


// Task 22

let age22 = Number(prompt("Enter your age:"));

if (age22 >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


// Task 23

let number23 = Number(prompt("Enter a number:"));

if (number23 > 0) {
    console.log("Positive");
} else if (number23 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// Task 24

let marks24 = Number(prompt("Enter your marks:"));

if (marks24 >= 90 && marks24 <= 100) {
    console.log("A Grade");
} else if (marks24 >= 80) {
    console.log("B Grade");
} else if (marks24 >= 70) {
    console.log("C Grade");
} else if (marks24 >= 60) {
    console.log("D Grade");
} else if (marks24 >= 0) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}


// Task 25

let age25 = Number(prompt("Enter your age:"));
let height25 = Number(prompt("Enter your height:"));
let weight25 = Number(prompt("Enter your weight:"));

if (age25 >= 18) {
    if (height25 >= 160) {
        if (weight25 >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("Weight should be 60 or above");
        }
    } else {
        console.log("Height should be 160 or above");
    }
} else {
    console.log("Age should be 18 or above");
}


// Task 26

let trafficColor = prompt("Enter traffic light color:");

switch (trafficColor) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


// Task 27

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// Task 28

let finalName = prompt("Enter your name:");
let finalAge = Number(prompt("Enter your age:"));
let finalCity = prompt("Enter your city:");

let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));

let total = tamil + english + maths;
let average = total / 3;

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

let voting;

if (finalAge >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

console.log(`
Name: ${finalName}
Age: ${finalAge}
City: ${finalCity}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);
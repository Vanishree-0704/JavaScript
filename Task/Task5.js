// Q1

// var - redeclare and reassign
// let - reassign, cannot redeclare
// const - cannot reassign or redeclare


// Q2

// var can be redeclared
// let and const cannot be redeclared


// Q3

var x3 = 5;
let y3 = 10;
const z3 = 15;

x3 = 20;
y3 = 25;
// z3 = 30;

console.log(x3, y3, z3);


// Q4

// Declaration - creating a variable
// Initialization - giving a value to a variable

let age4;
age4 = 23;


// Q5

let a;

console.log(a);


// Q6

// Hoisting - declarations are processed before code execution

console.log(a6);
var a6 = 10;


// Q7

// undefined - no value is assigned
// null - empty value assigned intentionally

let a7;
let b7 = null;

console.log(a7);
console.log(b7);


// Q8

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});


// Q9 Operators

// == checks value
// === checks value and data type

console.log(5 == "5");
console.log(5 === "5");


// Q10

// ++i - increases first
// i++ - uses first, then increases

let i10 = 10;
console.log(++i10);

let j10 = 10;
console.log(j10++);


// Q11

let x11 = 10;
let y11 = "5";

console.log(x11 + y11);
console.log(x11 - y11);
console.log(x11 * y11);
console.log(x11 / y11);


// Q12

// Logical operators are used to combine conditions
// && - AND
// || - OR
// ! - NOT

console.log(true && true);
console.log(true || false);
console.log(!true);


// Q13

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));


// Q14

// Ternary operator is a short form of if-else

let age14 = 20;

let result14 = age14 >= 18 ? "Adult" : "Minor";

console.log(result14);


// Q15  Type Casting 

// Implicit casting - JavaScript converts automatically
// Explicit casting - programmer converts manually

let result15 = Number("10");

console.log(result15);


// Q16

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));


// Q17

// NaN means Not a Number

let result17 = Number("hello");

console.log(result17);


// Q18 Conditional Statements 

// if-else is used for conditions
// switch is used to compare one value with many cases

let age18 = 20;

if (age18 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Q19

let age19 = 20;

if (age19 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Q20

// Nested if means an if statement inside another if

let age20 = 20;
let height20 = 170;

if (age20 >= 18) {
    if (height20 >= 160) {
        console.log("Eligible");
    }
}


// Q21

let number21 = 10;

let result21 = number21 % 2 === 0 ? "Even" : "Odd";

console.log(result21);


// Q22  Loops

// while checks condition first
// do-while executes once first

let i22 = 1;

while (i22 <= 5) {
    console.log(i22);
    i22++;
}

let j22 = 1;

do {
    console.log(j22);
    j22++;
} while (j22 <= 5);


// Q23

for (let i23 = 1; i23 <= 5; i23++) {
    console.log(i23);
}


// Q24

// for...of gives values
// for...in gives keys

let fruits24 = ["Apple", "Banana", "Mango"];

for (let fruit of fruits24) {
    console.log(fruit);
}

let employee24 = {
    name: "Arun",
    age: 25
};

for (let key in employee24) {
    console.log(key);
}


// Q25

let sum25 = 0;

for (let i25 = 1; i25 <= 100; i25++) {
    sum25 += i25;
}

console.log(sum25);


// Q26 Arrays

// slice() copies part of an array
// splice() changes the original array

let arr26 = [1, 2, 3, 4, 5];

console.log(arr26.slice(1, 3));

arr26.splice(1, 2);

console.log(arr26);


// Q27

let arr27 = [1, 2, 3];

arr27.push(4);
arr27.pop();
arr27.unshift(0);
arr27.shift();

console.log(arr27);


// Q28 Functions 

// Function declaration

function greet28() {
    console.log("Hello");
}

greet28();


// Function expression

let greet28b = function() {
    console.log("Hello");
};

greet28b();


// Q29

// Arrow function is a shorter way to write a function

let add29 = (a, b) => {
    return a + b;
};

console.log(add29(10, 20));


// Q30

function greet30() {
    return "Hello";
}

let message30 = greet30();

console.log(message30);
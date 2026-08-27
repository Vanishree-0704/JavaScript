/* 1. What is a variable in JavaScript?
 ans:  A variable is used to store a data or value in JavaScript . */

 //========================================================================

 /* 2. What are the three keywords used to create variables?
ans:   var, let, and const */

//============================================================================

 /* 3. Write the syntax to create a variable using var.
 ans: */ 
  var name ="Vanishree" ;
  console.log(name);

 //==========================================================================

 /* 4. Write the syntax to create a variable using let.
ans : */
 let age1 =23; 
 console.log(age1);

//==========================================================================

/* 5. Write the syntax to create a variable using const.
ans : */
 const pi = 3.14; 
 console.log(pi);

//==========================================================================

/* 6. What is declaration?
ans : Declaration means creating a variable without assigning a value. 
for an example : let age; */

//===========================================================================

/* 7. What is initialization?
ans : Initialization means assigning a value to a variable for the first time. 
for an example : */
let age2 = 25; 
console.log(age2);

//===========================================================================

/* 8. What is reassignment?
ans : Reassignment means changing the existing value of a variable. 
for an example : */
 let age = 25;
 age = 30; 
 console.log(age)

//=============================================================================

/* 9. What is redeclaration?
ans : Redeclaration means declaring the same variable again using the same keyword.
for an example: */
var x = 10;
var x = 20;
console.log(x); 

//================================================================================

/* 10. Which keyword allows redeclaration?
ans :  var */

//================================================================================

/* 11. Which keyword allows reassignment?
ans : var and let. */

//================================================================================

/* 12. Which keyword requires initialization when declared?
ans : const. 
for an Example: */
 const ages = 25; 
 console.log(ages);

//================================================================================

/* 13. Identify the declaration and initialization:
ans :  let age3 = 25;
Declaration → let age
Initialization → age = 25
*/

//===================================================================================

/* 14. What is the value of a?
ans : */ var a1 = 100;
console.log(a1);


//==================================================================================

/* 15. What will be the output?
ans : */ var a2 = 10;
console.log(a2);

//================================================================================

/* 16. What will be the output?
ans : */  var a3 = 10;
            a3 = 20;
console.log(a3);

//================================================================================

/* 17. What will be the output? */

var a4 = 10;
var a4 = 30;
console.log(a4);

//================================================================================

/* 18. Write a var variable named name with the value "John".
ans : var name = "John"; */

//=================================================================================

/* 19. Create a var variable named price with the value 500.
ans : var price = 500; */

//==================================================================================

/* 20. Reassign price from 500 to 1000.
ans : */ var price = 500;
price = 1000;
console.log(price);

//==================================================================================

/* 21. Reassign price from 500 to 1000.
*/

var price1 = 500;
price1 = 1000;

console.log(price1);

//========================================================================

/* 22. What will be the output?
The output is 100.
*/

var x1 = 50;
x1 = 100;

console.log(x1);

//========================================================================

/* 23. Can a var variable be reassigned?

Yes var can be reassigned.
*/

//========================================================================

/* 24. Can a var variable be redeclared?

Yes var can be redeclared.
*/

//========================================================================

/* 25. Write an example of var redeclaration.
*/

var city = "Chennai";
var city = "Salem";

console.log(city);

//========================================================================


/* 26. Create a let variable named age with the value 25.
*/

let age5 = 25;

console.log(age5);

//========================================================================

/* 27. What will be the output?
The output is 30.
*/

let age3 = 20;
age3 = 30;

console.log(age3);

//========================================================================

/* 28. Can a let variable be reassigned?

Yes let can be reassigned.
*/

//========================================================================

/* 29. Can a let variable be redeclared?

No let cannot be redeclared .   
*/

//========================================================================

/* 30. Find the error:

The same variable name is declared twice using let.so this is the error.
*/

//  let name2 = "John";
//  let name2 = "David";

//========================================================================

/* 31. Create a let variable called city and assign "Chennai".
*/

let city1 = "Chennai";

console.log(city1);

//========================================================================

/* 32. Change the value of city to "Salem".
*/

let city2 = "Chennai";
city2 = "Salem";

console.log(city2);

//========================================================================

/* 33. What will be the output?

 ans : output is 50.
*/

let x2 = 10;
x2 = 50;

console.log(x2);

//========================================================================

/* 34. Write a let variable called salary with the value 25000.
*/

let salary = 25000;

console.log(salary);

//========================================================================

/* 35. Reassign salary to 30000.
*/

let salary1 = 25000;
salary1 = 30000;

console.log(salary1);

//========================================================================

/* 36. Create a const variable called pi with the value 3.14.
*/

const pi1 = 3.14;

console.log(pi1);

//========================================================================

/* 37. Can a const variable be reassigned?

No. const cannot be reassigned.
*/

//========================================================================

/* 38. Can a const variable be redeclared?

No. const cannot be redeclared.
*/

//========================================================================

/* 39. What is wrong with this code?

const must have a value when it is declared.
*/

// const age4;
// age4 = 25;

//========================================================================

/* 40. What happens here?

It is an error because const cannot be reassigned.
*/

// const price2 = 500;
// price2 = 1000;

//========================================================================

/* 41. Create a const variable called country with the value "India".
*/

const country = "India";

console.log(country);

//========================================================================

/* 42. What will be the output?

Ans : output is 100.
*/

const x3 = 100;

console.log(x3);

//========================================================================

/* 43. Which keyword should you use if the value should not be reassigned?

const should be used.
*/

//========================================================================

/* 44. What is the difference between let and const?

let can be reassigned.
const cannot be reassigned.
*/

//========================================================================

/* 45. What is the difference between var and const?

var can be reassigned and redeclared.
const cannot be reassigned or redeclared.
*/

//========================================================================

/* 46. Write JavaScript code to print Hello World using console.log().
*/

console.log("Hello World");

//========================================================================

/* 47. Write JavaScript code to print the number 500 using console.log().
*/

console.log(500);

//========================================================================

/* 48. What is the purpose of console.warn()?

It is used to show a warning message.
*/

console.warn("This is a warning");

//========================================================================

/* 49. What is the purpose of console.error()?

It is used to show an error message.
*/

console.error("This is an error");

//========================================================================

/* 50. What is the purpose of each?

alert() → Shows a message.
prompt() → Gets input from the user.
confirm() → Asks for confirmation.
document.writeln() → Shows text on the webpage.
console.log() → Shows text in the console.
*/

//========================================================================
console.log("Arithmetic Operators");

let a = 10;
let b = 3;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 
console.log(a ** b); 

console.log("Assignment Operators");
let x = 5;

x += 2;
console.log(x);
x -= 1;
console.log(x);
x *= 3;
console.log(x);
x /= 2;
console.log(x);
x %= 4;
console.log(x);
x **= 2;
console.log(x);

console.log("Comparison Operators");
console.log(5 == '5');
console.log(5 === '5');
console.log(5 != 4);
console.log(5 !== '5');
console.log(3 > 2);
console.log(3 >= 3);
console.log(2 < 3);
console.log(2 <= 1);

console.log("String Operators");
let firstName = "Gangster";
let lastName = "Ganesh";

let fullName = firstName + " " + lastName;
console.log(fullName);

console.log("Logical Operators");
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse);
console.log(isTrue || isFalse);
console.log(!isTrue);

console.log("Bitwise Operators");
console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(~5);
console.log(5 << 1);
console.log(5 >> 1);

console.log("Ternary Operator");
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);

console.log("Type Operators");

console.log(typeof "Hello");
console.log(typeof 123);

let person = { name: "Alice" };
delete person.name;
console.log(person);

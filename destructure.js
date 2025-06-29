console.log("Destructuring");
const fruits = ['apple', 'banana', 'cherry'];

console.log("Array Destructuring");
const [first, second, third] = fruits;

console.log(first);  
console.log(second); 
console.log(third);  




const numbers = [10, 20];
const [, x] = numbers; 
console.log(second); 

const [a, b, c = 30] = numbers;
console.log(c); 



console.log("Object Destructuring");

const person = { name: 'John', age: 25, city: 'Madurai' };
const { name, age, city } = person;
console.log(name); 
console.log(age);  
console.log(city); 

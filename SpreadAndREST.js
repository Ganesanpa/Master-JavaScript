console.log("Spread Operator ");

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; 
console.log(arr2);


const arr3 = [1, 2];
const arr4 = [3, 4];
const merged = [...arr3, ...arr4];
console.log(merged); 

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; 
console.log(obj2); 


const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); 


console.log("REST Parameters (");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); 

console.log("Array");

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

let car=cars[0];
console.log(car);

//Add element
 anime = [];

var anime = ["Bankai", "tatake", "joyboy"];
anime.push("monster");
console.log(anime);

let len = anime.length;
console.log("Array Length: " + len);

var characters = new Array();

characters=['luffy','naruto','eren','goku',200,true]

console.log(characters);


Array.isArray(characters);
console.log("isarray method");

let type = typeof characters;

console.log(type);
console.log("typeof method");
characters.unshift("bleach");
console.log("unshift method");
let last = characters.pop();
console.log("pop method");

console.log(" Iterating Through Array Elements");


let a = ["HTML", "CSS", "JS"];

for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

//foreach loop

let b = ["Node.js", "Express.js", "Next.js"];


b.forEach(function myfunc(x) {
    console.log(x);
});




let concateArray = a.concat(b);

console.log("Concatenated Array: ", concateArray);

console.log("type of array:"+typeof a);



console.log("fill method");
let arr = [1, 23, 46, 58,65,87,23,45,1,7];


arr.fill(87, 1, 3);
console.log(arr);


console.log("every method");
function ispositive(element, index, array) {
    return element > 0;
}

function func() {
    let arr = [11, 89, 23, 7, 98];

  
    let value = arr.every(ispositive);

    console.log(value);
}

func();

console.log("Splicing and Slicing Arrays");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log("splicing:"+fruits);
const citrus = fruits.slice(3);
console.log("slicing: "+fruits);
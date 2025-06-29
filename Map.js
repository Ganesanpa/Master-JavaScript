console.log("Creating a Map");
const myMap = new Map();

console.log("Adding Entries");

myMap.set('name', 'John');
myMap.set('age', 30);

console.log("Accessing Values");

myMap.set({ id: 1 }, 'Object as key');
console.log(myMap.get('name')); 
console.log(myMap.get('age'));  
  
console.log("Checking for Keys");

console.log(myMap.has('name')); 
console.log(myMap.has('gender')); 


console.log("Deleting Entries");

myMap.delete('age');
console.log(myMap.has('age')); 

console.log("Iterating Over a Map");

myMap.set('country', 'India');
myMap.set('city', 'Firozabad');


myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});


for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

console.log("Getting Size");

console.log(myMap.size); 


console.log(" Clearing the Map");

myMap.clear();
console.log(myMap.size); 


console.log("Converting Map to Array");

const mapArray = [...myMap]; 
console.log(mapArray);

const keys = [...myMap.keys()];
const values = [...myMap.values()]; 

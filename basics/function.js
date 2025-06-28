console.log("Function");


function welcomeMsg(name) {
    return ("Hello " + name + " welcome to SoulSoiety");
}

let nameVal = "joyboy";


console.log(welcomeMsg(nameVal));


console.log("Arrow Functions");


const add = (a, b) => a + b;
console.log(add(5, 3));


const makePerson = (firstName, lastName) =>
({first: firstName, last: lastName});
console.log(makePerson("John", "wick"));

console.log("callback function");


function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Ganesan", sayBye);

console.log("Higher-Order Functions");

function multiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = multiplier(2);

console.log(double(5)); 
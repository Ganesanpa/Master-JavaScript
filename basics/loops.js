console.log("For Loop");

for (let x = 2; x <= 4; x++) {
    console.log("Value of x:" + x);
}


console.log(" for...of Loop");
const a = [ 1, 2, 3, 4, 5 ];

for (const item of a) {
    console.log(item);
}

console.log(" For In Loop");
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}




console.log("While Loop");
let arr = [10, 20, 30, 40];
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}


console.log("Do-While loop");
let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 5);



console.log("Continue Statement");
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}



console.log("");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at", i);
        break;
    }
    console.log(i);
}
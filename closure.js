function createMultiplier(a) {
  return function (b) {
    return a * b;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); 
console.log(triple(5)); 

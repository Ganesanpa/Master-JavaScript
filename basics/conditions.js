console.log("if-else satatement");

let i = 10;

if (i < 15)
    console.log("i is less than 15");
else
    console.log("I am Not in if");

    

let k = 20;

if (k == 10)
    console.log("k is 10");
else if (k == 15)
    console.log("k is 15");
else if (k == 20)
    console.log("k is 20");
else
    console.log("k is not present");

let j = 10;

if (j == 10) {  
    if (j < 15) {
        console.log("j is smaller than 15");
        
        if (j < 12)
            console.log("j is smaller than 12 too");
        else
            console.log("j is greater than 15");
    }
}




console.log("Switch case");

let fruit = "apple";



switch (fruit) {
  case "banana":
    console.log("Yellow and sweet.");
    break;
  case "apple":
    console.log("Red and crunchy.");
    break;
  case "orange":
    console.log("Citrusy and juicy.");
    break;
  default:
    console.log("Unknown fruit.");
}

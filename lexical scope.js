function outerFunction() {
  let outerVariable = "I'm from the outer scope";

  function innerFunction() {
    console.log(outerVariable); 
  }

  innerFunction();
}

outerFunction();


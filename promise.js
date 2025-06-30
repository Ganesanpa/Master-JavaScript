let promise = new Promise((resolve, reject) => {
  
  let success = true;
  if (success) {
    resolve("It worked!");
  } else {
    reject("It failed.");
  }
});

promise.then(result => console.log(result))
       .catch(error => console.error(error));



//async
 async function fetchData1() {
  return "Data fetched!";
}

fetchData1().then(console.log); 
      

//await
async function getResult() {
  let result = await fetchData1();
  console.log(result); 
}



//ex2


const fetchData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      success ? resolve("Data fetched!") : reject("Error fetching data.");
    }, 2000);
  });
};

fetchData2()
  .then((data) => console.log(data)) 
  .catch((error) => console.error(error)); 



  //ex3

  const fetchData3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      success ? resolve("Data fetched!") : reject("Error fetching data.");
    }, 2000);
  });
};

const getData = async () => {
  try {
    const data = await fetchData3(); 
    console.log(data); 
  } catch (error) {
    console.error(error); 
  }
};

getData();

//CallMethod
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const user = {
  firstName: "John",
  lastName: "Doe"
};

console.log(person.fullName.call(user)); 


//apply Method
const person1 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + " from " + city + ", " + country;
  }
};

const user2 = {
  firstName: "Jane",
  lastName: "Smith"
};

console.log(person.fullName.apply(user, ["New York", "USA"])); 


//Bind Method
const person3 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const user3 = {
  firstName: "Alice",
  lastName: "Johnson"
};

const boundFullName = person.fullName.bind(user);
console.log(boundFullName()); 
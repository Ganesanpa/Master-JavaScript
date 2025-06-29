
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}


class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak();


const animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

const dog1 = Object.create(animal);
dog.name = "Buddy";
dog.speak(); 

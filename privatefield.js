class Example {
  #privateValue; 
  constructor(value) {
    this.#privateValue = value; 
  }

 
  get #value() {
    return this.#privateValue;
  }

  
  set #value(newValue) {
    if (typeof newValue === 'string') {
      this.#privateValue = newValue;
    } else {
      console.error('Value must be a string!');
    }
  }

  getValue() {
    return this.#value;
  }

 
  setValue(newValue) {
    this.#value = newValue;
  }
}

const obj = new Example('Hello');
console.log(obj.getValue()); 
obj.setValue('World');
console.log(obj.getValue());
obj.setValue(123); 
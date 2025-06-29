
import { Circle, Rectangle } from './exportClass.js';

const circle = new Circle(5);
console.log(circle.area());

const rectangle = new Rectangle(4, 6);
console.log(rectangle.area());




import Car from './exportClass.js';

const myCar = new Car('Toyota');
myCar.drive();

class Course {
  title;
  lenght;
  price;
  constructor(title, length, price) {
    this.title = title;
    this.lenght = length;
    this.price = price;
  }

  getPrice() {
    return `$${this._price}`;
  }

  set price(value){
    if(value<0){
        throw 'invalid';
    }
        this._price=value;
    
  }

  calculatePrice() {
    return this.lenght / this._price;
  }
  summary() {
    console.log(
      `title: ${this.title}` +
        ' ' +
        `price: ${this.price}` +
        ' ' +
        `length:${this.lenght}`
    );
  }
}
let choice1 = new Course('js', 1, -12000);
let choice2 = new Course('js1', 3, 13000);
console.log(choice1);
console.log(choice2);
console.log(choice1.calculatePrice());
console.log(choice2.calculatePrice());

console.log(choice1.summary());
console.log(choice2.summary());

class PracticalCourse extends Course {
  numOfExercises;
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheroticalCourse extends Course {
  //constructor(title, lenght, price) {}
  publish() {
    console.log('i am in therotical course');
  }
}
const therotical = new TheroticalCourse('js', 23, 1);
therotical.publish();
therotical.summary();

const pratical = new PracticalCourse('js', 3, 90, 1);
console.log(pratical);
pratical.summary();



const person={name:'kesa',greet:function greet(){
    console.log(this.name);
}};

person.greet();
Object.getOwnPropertyDescriptors(person);

//Object.defineProperty(person,'name');


Object.getOwnPropertyDescriptors(person);
//configurable,enurable,writable,value

// greet
// : 
// configurable
// : 
// true
// enumerable
// : 
// true
// value
// : 
// ƒ greet()
// writable
// : 
// true
// [[Prototype]]
// : 
// Object
// name
// : 
// configurable
// : 
// true
// enumerable
// : 
// true
// value
// : 
// "kesa"
// writable
// : 
// true
// [[Prototype]]
// : 
// Object
// [[Prototype]]
// : 
// Object


Object.defineProperty(person,'name',{
    configurable:true,
    enumerable:true,
    value:person.name,
    writable:false
});
//for for in loops ennumberable can be skip
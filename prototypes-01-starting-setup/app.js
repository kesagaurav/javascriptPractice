class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'gaurav';

  constructor() {
    super();
    this.age = 30; //muts be called in derievd class without using "this"//means we add super befor "this" keyword
  }

  greet() {
    console.log(`hi , i am ` + this.name + `and i am` + this.age);
  }
}
// const person=new Person();
// person.greet();

// function Person(){
//     //new does is
//     // it will create an this={} -> like this and it will add the below code afterwards it will return this
//     this.age=30;
//     this.name='kesa';
//     this.greet=function(){
//         console.log(`hi , i am ` + this.name + " " +  `and i am` + " " +  this.age);

//     }
//     //return this; // this is what new keywrod does in JS.
// }

// console.dir(Person);
// const p=new Person();
// p.greet();
//p.printAge();
//console.log(p.__proto__);
// console.log(p);

// Person.prototype.printAge=function(){
//     console.log(this.age);
// }

// console.dir(Object.prototype.__proto__);//this is where the prototype chain ends.

// Person.describe=function(){
//     console.log('creating persons......');
// }

// const p=new Person();
// const p2=new Person();

// console.log(p.__proto__===p2.__proto__);

// const items=[1,2,3,4,5];
// items.forEach(e=>console.log(e))

// let a="gaurav";
// a.replace("kesa","gaurav");
// console.log(a);

const course = {
  //new Object()
  title: 'js-the complete guide',
  rating: 4,
};
//console.log(Object.getPrototypeOf(course));
console.log(
  Object.setPrototypeOf(course, {
    //...Object.getPrototypeOf(course),
    printRating: function () {
      console.log(`${this.rating}/5`);
    },
  })
);
course.printRating();

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  },
},{
    name:{
        configurable:false,
        enumerable:true,
        value:'deepa',
        writable:true
    }
}); //new {}
// student.name='deepa';
Object.defineProperty(student,'progress',{
    configurable:true,
    enumerable:true,
    value:10.00,
    writeble:true
})
console.log(student);
let person={
    id:1,
    name:'gaurav',
    age:27,
    hoobies:['cooking','watchingTV'],
    greet:function greet(){
        console.log("hello");
    }
};

console.log(person);
console.log(person['greet']);

const propKey = 'field 12';
const person1 = {
    [propKey]: 'Max'
};
console.log( "value is  " + person1['field 12']);



//const movieList = document.getElementById('movie-list');

// movieList.style['background-color'] = 'red';
// movieList.style.display = 'block';

// const userChosenKeyName = 'level';

// let person = {
//   'first name': 'Max',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   [userChosenKeyName]: '...',
//   greet: function() {
//     alert('Hi there!');
//   },
//   1.5: 'hello'
// };

// // ...

// // person.age = 31;
// delete person.age;
// // person.age = undefined;
// // person.age = null;
// person.isAdmin = true;

// const keyName = 'first name';

// console.log(person[keyName]);
// console.log(person[1.5]);
// console.log(person);

// const person1=[{person}];
// person1.push({id:2,name:'deepa',age:53});
// console.log(person1);

// if u try to access an object property which is not there it will not throw any error it will show undefined
//console.log(" the value is " +  person.isAdmin);
person.isAdmin=true;
// console.log("the value is " + person);
// delete person.age;
// console.log(person);

// console.log(person.name);

//property access using square brackets
console.log(person['age']);
console.log(person['name'] + " " + person['hoobies']);
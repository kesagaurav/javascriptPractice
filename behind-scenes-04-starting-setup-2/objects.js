let gaurav={
    'name':'gaurav',
    age:30,
    hobbies:['ok','ok'],
    greet:()=>{
        console.log('hi');
        
    },
    getFormatedTitle:function(){
        console.log(this);//gives window obj
        
        console.log('hello');
        return this.name.toUpperCase();
        
    }
}
//we can do method for obj destructing
let {getFormatedTitle}=gaurav;
console.log("method",getFormatedTitle);
getFormatedTitle=getFormatedTitle.bind(gaurav)
gaurav.age=32;
console.log(gaurav);
//in non-sttrict mode this will actually refer to window obj

delete gaurav.age;
console.log("value is  " + gaurav['name'],gaurav['greet'],gaurav['hobbies']);


const person={name:'gaurav',hobbies:['ok']};
//obj spread operator
const person2={...person};
console.log(person2);

const person5={...person2,age:29,hobbies:[...person2.hobbies]}

const person6=Object.assign({},person);
console.log("assign" + person6.toString());

const {info,...other}=person;
console.log("info",other);
//obj destructing
const {name:fullName,hobbies:hoby}=person;
console.log("name",fullName,"hobbies",hoby);



const person7={
    name:'gaurav',
    greet:function(){
        return this.name='ok';
    }
}//here the this func will tahe 48 line no.
console.log(person7.name);
//everty func will have this and also method in obj has also have this
// where arrow functs will not bind to this
//here this will take outside whihc is global object.IN arraw functions
// //this refers to window object. 
// example const movie=()=>{
// log(this);
// }
// garbage collector deletes refrecned values so if we declare the airbale if is not used garabage collector internally deletes it shortly we can tell that it will remove unsed objects this is called garbage collection.
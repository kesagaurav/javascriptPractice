var a=3;
console.log(typeof a);

var b="gaurav";
console.log(typeof b);

var c={};
console.log(typeof c);

var d=[];//object
console.log(typeof d);
console.log(Object.prototype.toString.call(d));


function Person(name){
    this.name=name;
}
var e=new Person("gaurav");
console.log(typeof e);
//instanceof will tells me if any obj is down the prototype chain of going to proto to proto to proto
console.log(e instanceof Person);

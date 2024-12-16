var nmae='gaurav';
//var nmae='gaurav1';
if(nmae==='gaurav'){
    let hobies=['sports','cooking'];
    console.log(hobies);
}//it will varies with golbal and if conditios.
function greet(){
    var age=30;
    var name="kesa";//shadow variable
    console.log("inside of a function " + name,age);
}
//let,const are block scope
console.log(nmae);
greet();
//var only know global and functional scope.
//let and const they dont care about functions and they care only for curly braces(if,functions,loops)
function hello(){
    console.log("wlecome to js engine happy to see u");
}

function getName(){
    let name="gaurav";
}

function greet(){
    let name=getName();
    console.log(name);
  
}
//js is single threaded can do one at a time.

greet();
hello();
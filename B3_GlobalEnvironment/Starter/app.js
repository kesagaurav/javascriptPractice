'use strict';

c();
console.log(a);


var a="gaurav";

function c(){
    console.log("called c");
    
}

//defined and undefined
//while exceuting js will keep like this(in a creation phase)
var b;
console.log(b);
//undefined is not a value but a special keyword and just set up memory space
if(b===undefined){
    console.log("undefined");
    
}else{
    console.log("defined");
    
}


var d="gaurav";
d="undefined";

console.log("val",d);

function e(){
    console.log(" value is  " + myVar);
    
}

function f(){
    var myVar=2;
    e();
}

var myVar=1;
f();
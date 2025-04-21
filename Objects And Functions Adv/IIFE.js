function greet(name) {
    console.log("hello " + name);
    
}

greet('hello');

var greetFunc=function(name){
    console.log("hi " + name);
    
}

greetFunc('gaurav');

//using iife(immediately invoked functions)
var greeting=function(name){
    return "hi " + name;

}('GAURAV');
console.log(greeting);



var firstname="kg";
var greeting="hola";
//just to trick the syntax parser and then i put parenthesies to actually run it
(function(global,name) {
    console.log("inside iife:");
    global.greeting='hello';
    
    console.log('hello ' + name);
    //like this for outside as well.objects are pass by reference
})(window,firstname);//IIFE(immediatley invoked func expression) and also we can insert both in inside and outside as well.


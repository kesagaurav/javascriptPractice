//function statement
greet();
function greet(){
    console.log("hi"); //it is a func statement until it will retursns
    
}



//func expression

var Greet=function(){
    console.log('hello');
    
}

Greet();


function log(a){
    a();
}

log(function(){
    console.log('hi');
    
})
function greet(say){
    return function(name){
        console.log(say + ' ' + name);
        
    }
    
}

var sayHi=greet('Hi');
sayHi('gaurav');


function buildFunc(){
    var arr=[];
    for (var i = 0; i < 3; i++) {
      arr.push(function() {
        console.log(i);
        
      })
        
    }
    return arr;
}
var fs=buildFunc();
//a free var is avar used at outside of funcs.

fs[0]();
fs[1]();
fs[2]();




function buildFunc2(){
    var arr=[];
    for (var i = 0; i < 3; i++) {
      arr.push(
        (function(j) {
            return function(){
                console.log(j);
                
            }
        
        
      }(i)));
        
    }
    return arr;
}
var fs2=buildFunc2();
//a free var is avar used at outside of funcs.

fs2[0]();
fs2[1]();
fs2[2]();
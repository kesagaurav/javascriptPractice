How javascript engine works

so we are having 2 phases for js engine to run

1.creation phase.

a.In creation phase we have 3 
global execution context -> here we will add all below 3 in a1

a1)they are  global obj,this,outer-enviroment (these will come under global excuetion context)(global==this)
browser -> window obj.

2.excution phase.(this is 2nd phase)

2.a Anytime when we invoke or excute javascript func then it will create a new
exeuction context and put on exceution stack.

here what happens

function e(){
    
    console.log(" value is  " + myVar);
    
}

function f(){

    var myVar=2;
    e();
}

var myVar=1;

f();

so in the above when we call f() we will get 1 because in the e function we have log(muVar) at this time the function e() is lexigraphically sitting as a in case of Myvar on line 32 and other case what it will do is the exceution context links to refernce to outer enviroment (scope-chain) so what it will do so in func e i had kept log(myVar) but i didnot defned it but myVar is there in line 32 so the scop-chain will check all over the code where we assign myVar it will check and give o/p as 1.



var a=3;
var b;

b=a;
a=9;
console.log(b==a);


//by ref(all objects(including funcs))
var c={greeting: 'hi'};
var d;

d=c;
c.greeting='hello';
console.log(c,d);


//by ref(even as paramatesr)
function chanGreeting(obj){
    obj.greeting='gaurav';//mutate
}

chanGreeting(d);
console.log(c);
console.log(d);
c={greeting:'howdy'};
console.log(c);
console.log(d)

const c1=function (a){
    // a();
    console.log("hello");
    
}

c1();
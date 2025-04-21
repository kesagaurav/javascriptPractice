var person={
    firstname:'kesa',
    lastname:'gaurav',
    getFullName:function() {
        var fullName=this.firstname + this.lastname;
        return fullName;
    }
}


var logName=function(lang1,lang2){
    console.log('logged ' + this.getFullName());
    console.log('Argumentts ' + lang1 + " " + lang2);
    
    //we can keep like this as well.
}.bind(person);
//this will copy
var logPersons=logName.bind(person);
console.log(logPersons);

logPersons('eb','te');
// logName();

//this will exceute
logName.call(person,'en','es');
//this will exceute same as the call but only diff in apply is we can use only arrays in below example
logName.apply(person,['en','es']);


(function(lang1,lang2){
    console.log('logged ' + this.getFullName());
    console.log('Argumentts ' + lang1 + " " + lang2);
    
    //we can keep like this as well.
}).apply(person,['en','te']);




//function borrwoing
var person2={
    firstname:'kesa',
    lastname:'gaurav',
}

console.log(person.getFullName.apply(person2));

//function currying(copies of funcstions)

function multiply(a,b){
    return a*b;
}
//in this bind will copy the values and it will take first paramter
var multipluBytwo=multiply.bind(this,2,null);
//this is 2 nd paramter
console.log(multipluBytwo(3));

//factory funcs means return values or functions
function makeGreeting(lang){
    return function(firstname,lastname){
        if(lang==='en'){
            console.log('hello ' + firstname + ' ' + lastname);
            
        }
        if(lang==='es'){
            console.log('hello ' + firstname  + ' ' + lastname);
            
        }   
    }
}


var greetEng=makeGreeting('en');
var greetSpan=makeGreeting('es');

greetEng('gaurav','kesa');
greetSpan('deepa','kesa');
// console.log(greetEng);
// console.log(greetSpan);


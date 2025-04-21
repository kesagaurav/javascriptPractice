var gaurav={
    firstname:'gaurav',
    lastname:'kesa',
    address:{
        street:'karembad road',
        city:'war',
        state:'TEL'
    }
}
console.log(gaurav);
console.log(gaurav.address.city);


function greet(person){
    console.log("hello " + person.firstname);
    
}

greet(gaurav);
greet({
    firstname:'kg',
    lastname:'ok'
});


var greet="gaurav";
var greet="kesa";

console.log(greet);

var english={
    greetings:{
        basic:'hello'
    }
};
var telugu={};

english.greet="hello";
telugu.greet="hola";
//so if we kepep
console.log(english,telugu);
console.log(english.greetings.basic);


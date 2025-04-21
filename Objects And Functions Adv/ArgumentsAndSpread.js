function greet(firstname,lastname,language="tel",...other) {
    if(arguments.length===0){
        console.log("missing paras");
        console.log("------------------------");
        return;
        
    }
        console.log(firstname);
        console.log(lastname);
        console.log(language);
        console.log(arguments[0]);
        

        console.log("------------------------");
        console.log(other);
        
        
        
}

greet('gaurav','kesa','telugu',"jijj","jiji","jijiji");
greet('gaurav','kesa','telugu',"jijj","jiji","jijiji");

function greet(firstname){
    console.log(firstname,"hello");
    
}

greet('gaurav');


function getPerson() {
    //here the automatic semicolon parse will come into acocunt it will show undefined
    // so we should keep the {} beside the return to work see below.    
    return {
            firstname:'gaurav'
        }
}

console.log(getPerson())

var firtsname,

lastname,

language;

var person={
    firtsname:'ga',
    lastname:'ke'
};

console.log(person);

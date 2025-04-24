var person={
    firstname:'gaurav',
    lastname:'kesa',
    getFullName:function(){
        return this.firstname + " " + this.lastname;
    }
}

var gaurav={
    firstname:'gaurav',
    lastname:'kesa'
}


gaurav.__proto__= person;
// console.log(gaurav.getFullName());


//reflection and extend
for(var prop in gaurav){
    if(gaurav.hasOwnProperty(prop))
    console.log(prop + ": " + gaurav[prop]);
    
}
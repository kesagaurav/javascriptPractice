function Person(){
    console.log(this);
    
    this.firstname="gaurav";
    this.lastname="kesa";
    console.log("this func is invoked");
    console.log(this);

}
Person.prototype.getFullName=function(){
    return this.firstname + " " + this.lastname;
}

//sets new empty object with this keyword if u dont return anything it will return undefined will return empty object
//so if we not keep new it will give undefined and for protopical it will give ius error.
var kesa= new Person();
console.log(kesa);

kesa.getFullName();
console.log(kesa);


Person.prototype.getFormalFullName=function(){
    return this.lastname + " " + this.firstname;
}
console.log(kesa.getFormalFullName());

var k2= new Person();
console.log("k2",k2.getFormalFullName());


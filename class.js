class User{
    name;
    age;
    gender;
    phoneno;
    email;

    constructor(name,age,gender,phone,email) {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.phoneno=phone;
        this.email=email;
    }


    getName(){
        return this.getName();
    }

}

let user=new User('nmae',23,"gender","phone","email");
//user.getName().name;
console.log(user);


let gaurav={
    name:'gaurav',
    age:12,
    male:'m',
    greet(){
        console.log("hello");
        
    },
    greet1(){
        console.log("i am inside if grret1");
        this.greet();
    }
};
console.log(gaurav);
gaurav.greet();
gaurav.greet1();
gaurav.greet.apply(gaurav);
gaurav.greet.call(gaurav);
gaurav.greet.bind(gaurav);

class Validator{
    static REQUIRED='REQUIRED';
    static MIN_LENGTH='MIN_LENGTH';
    static validate(value,flag,validatorValue){
        if(flag===this.REQUIRED){
            return value.trim().length>0;
        }
        if(flag===this.MIN_LENGTH){
            return value.trim().length>validatorValue;

        }
    }
}
class User {
constructor(uName,uPassword){
    this.userName=uName;
    this.password=uPassword;
}
greet(){
    console.log('hello');
    
}
}
class userInputForm{
    constructor() {
        this.form=document.getElementById('suer-input');
        this.username=document.getElementById('uernmae');
        this.passwordInput=document.getElementById('password');
        this.form.addEventListener('submit',this.signupHandler);
    }

    signupHandler(event){
        event.preventDefault();
        const enterUserName=this.username.value;
        const password=this.passwordInput.value;

    }
}
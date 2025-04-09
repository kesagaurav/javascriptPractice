const add=(num1,num2)=>{
    return num1+num2;
}//pure function does not chnage outside of function.and produce same results for smae inputs
console.log(add(1,5));
console.log(add(1,6));
const hobbies=['Spors','cooking'];//this is global enviroments
const random=(num1)=>{//impure func.
    return num1+Math.random();
}
console.log(random(9));
let multiplier=2.1;
//factory functions
//we have 2 types of enviromrnets one is lexcical and other is global enviroments.
const createTaxCalculator=(tax)=>{//in this func creates a new lexical func and registers any variables insdie it.
    const calTax=(amount)=>{
       console.log(multiplier);
       
        return amount*tax*multiplier;
    }
    return calTax;
}
//what is closure
//every func closes over surrounding ebviroments which measn it resgister the surrounding enviroments and var registed there and its memorizes the values of these variables
//evry func in javascript is a closure bec every func in javascript behcvaes like this.
const calVatAmount=createTaxCalculator(0.19);
const incomeTaxAmt=createTaxCalculator(0.20);
multiplier=2.5;
console.log(calVatAmount(100),incomeTaxAmt(200));


//closures in detais with examples
let userName='gaurav';
const greetUser=()=>{
    // let name=userName;
    let name='gaurav';
    console.log("hi "  + name);
}
//inner varibale will be the first exceute than outer variable which is called shadowing
name="kesa1";
//userName is not in own enviroment but it is outisde of main enviroment and func does close over this and store the value of the userName and if the varibale chnages  then the func reflects that chnage
// and also it will not copy the value but instead it will store the varbale then it can access the variable and not the value of variable
// hence we can say call the func indeed this gets the latest value it can find the varibale the value we set here in lin 42.
userName='kesa';

greetUser();


//by default all events be in bubbling phase only.
//div.addEventListener('click',(event)=>{log("hello")},true)->capturing phase.
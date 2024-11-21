// const ok1=document.getElementById("ok");

// ok1.addEventListener('click',()=>{
//     console.log("i am in ok1");
// })

// ok2();
// function ok2(){
//     console.log("ok2");
// }
// ok2();
// let a=function ok2(){
//     console.log("ok2");
// }


//rest operators.
const sumUp=(resultHandler,...numbers)=>{
    let sum=0;
    for(const num of numbers){
        sum+=num;
    }
    return resultHandler(sum);
}

const result=(result)=>{
    alert("the result is " + result);
}

sumUp(result,1,9,209,101,201,1);



const sumMul=(resultHandler,...numbers)=>{
    let sum=1;
    for(const num of numbers){
        sum*=num;
    }
    return resultHandler(sum);
}

sumMul(result,1,9,8,10,19,20);


const sumSub=function(){
    let sum=1;
    for(const num of arguments){ //dont use 
        sum-=num;
    }
    return sum;
}

console.log(sumSub(1,9,8,10,19,20));



function multiply(num,num2=2){
    return num*num2;
}

console.log(multiply(2,undefined));

let global="global val";
function demo(){
     local="local var";
     let globalvar="new global val";
     console.log(globalvar);




}



demo();
console.log(global);

console.log(local);
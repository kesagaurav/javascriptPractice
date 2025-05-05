//let,const -> block level scops
// let var1=0;
// {
//     let myVar=2;
//     console.log(myVar);
//     {
//         let var3=3;
//         for(let i=4;myVar>2;i++){
//             console.log(myVar);
            
//         }        
//     }
// }
// console.log(var1);


const var1=3;//already pointoing to memory
const greet={name:'tobu'};
console.log(greet);

const greet1=(name)=> 'hello ' + name;


console.log(greet1("Tony-Stark"));

function greet2(greetFunc,name){
    return greetFunc(name);
}
//arrow funcs we dont have any this keyword
console.log(greet2((name)=> 'Hi ' + name,"gaurav"));


//destructing assignment.
const greeting=['hello','hi',"dskndskj","sbjsbjs"];
// const a=greeting[0];
// const b=greeting[1];
const [a,b,...kesa]=greeting;
console.log(a,b,kesa);


let person={
    fn:'kg',
    ln:'kd'
};

let {fn,ln}=person;
console.log(fn,ln);

fetch('users.json').then(res=>res.json()).then((res)=> res).then(res=>console.log(res))
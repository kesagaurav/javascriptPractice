const a=document.getElementById('a');
const b=document.getElementById('b');
const result=document.getElementById("result");

const add=()=>{
    const aval=a.value;
    const bval=b.value;
    const sum=Number(aval)+Number(bval);
    result.textContent= sum;
    console.log(sum);
    
}

const clear=()=>{
    const clear=document.getElementById('clear').textContent="";
    const aval=a.value;
    const bval=b.value;
    console.log(clear);
    if(aval){
        aval="";
    }
    if(bval){
        bval="";
    }
    if(result){
        result.textContent="";

    }
   

    
}


const mul=()=>{
    const aval=a.value;
    const bval=b.value;
    const mul=Number(aval)*Number(bval);
    result.textContent= mul;
    console.log(mul);
}


const sub=()=>{
    const aval=a.value;
    const bval=b.value;
    const sub=Number(aval)-Number(bval);
    result.textContent= sub;
    console.log(sub);
}


const div=()=>{
    const aval=a.value;
    const bval=b.value;
    const div=Number(aval)/Number(bval);
    result.textContent= div;
    console.log(div);
}
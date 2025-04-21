const getAlert=()=>{
    return alert('gaurav');
}

const getName=()=>{
    return prompt('enter ur name');
}


const greet=()=>{
    const name=getName();
    console.log(name);
    
    const alert=getAlert();

}

const alertName=()=>{
    greet();
}

alertName();


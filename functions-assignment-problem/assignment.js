const sayHello=(name,hello)=>{
  console.log(hello + " " +  name);
  
}

const sayHello2=()=>{
  let hello="hello";
  let name="kg";
  console.log(hello + " " +  name);
  
}

const sayHello3=(name)=>{
 
 return  'hi ' + name;
}

const say=(name="gaurav")=>{
    console.log(name);
    
}


const checkInput=(cb,...strings)=>{
    let hasEmptyText=false;
    for(const e of strings){
      if(!e){
        hasEmptyText=true;
        break;
      }
    }
    if(!hasEmptyText){
      cb();
    }
  
}

checkInput(()=>{
  console.log("hi");
  
},"gaurav","deepa","kesa","kesa1");
say();
sayHello('gaurav','hello');
sayHello2();
console.log(sayHello3("gaurav"));

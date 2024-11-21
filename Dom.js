const id=document.getElementById('hello').innerHTML="gaurav";

//const id2=document.getElementById('hello').textContent="hello1";



if(id!="hello"){
    document.getElementById('hello').innerHTML="gaurav"
}else{
    document.getElementById('hello').innerHTML="hello , gaurav genius"
}

const name=document.getElementsByClassName("item2");
console.log(name);

const hello=document.getElementsByClassName("how");
console.log(hello);

const tag=document.getElementsByTagName("h1");
console.log(tag);

const id1=document.getElementById('hi');
id1.addEventListener('click',()=>{
    //this.id1=document.innerHTML='hello gaurav';
    if(!this.id1){
        this.id1=document.innerHTML='hello gaurav';

    }else{
        this.id1=document.innerHTML='hello';

    }
    console.log(this.id1);
});


const id3=document.querySelector('.item1');
console.log(id3);

const head=document.getElementById('hello').style.color='blue';
const head2=document.getElementById('hello').style.backgroundColor='';
const head3=document.getElementById('hello').style.border='1px solid yellow';
const head4=document.getElementById('hello').style.height='160px'
const head5=document.getElementById('hello').style.width='180px'
const head6=document.getElementById('hello').style.textAlign='center';
const head7=document.getElementById('hello').style.textDecorationColor='red';

const allLis=document.querySelectorAll('li');

for (const allLis1 of allLis) {
    console.log(allLis1);
    console.dir(allLis1);
}



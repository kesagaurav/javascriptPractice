const plus=document.getElementById('plus');
let counter=0;
const minus=document.getElementById('minus');
const reset = document.querySelector('.reset');
const label=document.getElementById('counter-label');

plus.addEventListener('click',function(){
    counter+=1;
    label.innerHTML=counter;
});

minus.addEventListener('click',()=>{
   counter-=1;
   label.innerHTML=counter;
    console.log(counter);

});

reset.addEventListener('click',()=>{
    counter=0
    label.innerHTML=counter;
    console.log(counter);
    
})
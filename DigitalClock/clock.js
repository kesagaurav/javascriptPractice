const clock=document.getElementById("clock");
const updateclock=clock.addEventListener('click',()=>{
    let date=new Date();
    clock.textContent=date.getTime();
    console.log(date);
    
});

setInterval(updateclock,1000);
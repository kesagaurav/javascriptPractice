const clock=document.getElementById("clock");
const updateclock=clock.addEventListener('click',()=>{
    let date=new Date();
    clock.textContent=date.toLocaleTimeString();
    console.log(date);
    
});

setInterval(updateclock,1000);
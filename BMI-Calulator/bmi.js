const weight=document.getElementById("weight");
const height=document.getElementById("height");
const res=document.getElementById("result");

const bmiCal=()=>{
    const weiValue=weight.value;
    const heiValue=height.value;
    const heightInMeters=Number(heiValue/100);
    const result=Number(weiValue)/(heightInMeters*heightInMeters);
    res.textContent=`the value is ${Math.round(Math.floor(result.toFixed(2)))}`;
    console.log(res);
    
}

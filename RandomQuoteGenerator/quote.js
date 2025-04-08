const id=document.getElementById("quote");
const quotes=['this is my day','how are u'];
const text=document.getElementById("text");

id.addEventListener('click',()=>{
    const random=(Math.random()*quotes.length);
    quotes.push(random);
    this.quotes=`val is ${random}`;
    console.log(random,quotes);
    text.textContent=id[random];
});
let arr=[1,2,3,4,5];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];

}
console.log("add val",sum);
let c=arr.map(a=>a+a).forEach(c=>console.log(c));
let reduce=arr.reduce((a,b)=>a+b);
console.log("reduce is " + reduce);


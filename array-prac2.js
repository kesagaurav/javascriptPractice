const arr=["apple","pomogranate","mango","banana"];

let arr2=arr.find(a=>a.length>5);
console.log(arr2);

let arr3=arr.indexOf("mango");
console.log(arr3);

let arr5=arr.filter(a=>a.includes("banana1"));
console.log(arr5);


let map=new Map();
map.set(1,"kg");
map.set(2,"kg");
map.set(3,"kg");
console.log(map);
for (const iterator of map.entries()) {
    if(map.has())
  console.log(map.values());
  
}

let s="I am learning jaavscript";
let e=Array.from(s.split("")).filter(a=>a.replaceAll("!/[aeiouAEIOU]/.test(a)")).forEach(a=>console.log(a));
console.log(e);







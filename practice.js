console.log("hello welceom to js");

//normal way of creating arrays
const num=[1,2,3,4,5,6];
console.log(num);

const num2=Array.from([1,2,3]);
console.log(num2);

const num3=new Array(1,2,3,4);
console.log(num3);

const num4=new Array("gaurav");
console.log(num4);

const num5=Array.of(1,2);
console.log(num5);


const num6=Array.from("kesa");
console.log(num6);

const hobbies=["sports","tv"];
hobbies.push("hello");//this will add ending of an array
console.log("hobbies are " + hobbies);
hobbies.unshift("hi");//this will add at the begning if an array
console.log("hobbies are " + hobbies);
//pop will del at end
console.log("hobbies for del " + hobbies.pop());
//shift will del at beginining
console.log("hobbies for del " + hobbies.shift());
//splice
hobbies.splice(0,0,"gaurav","welcome to js");
console.log(hobbies);
hobbies.splice(1,2);
console.log(hobbies);
console.log(hobbies.reverse());
//using map
const prices=[10.99,5.99,3.99,6.59];
const tax=0.19;

const taxAdjust=prices.map((price,idx,prices)=>{
    const priceObj={index:idx,taxAdjPrice:price*(1+tax)};
    return priceObj;
});

console.log(prices,taxAdjust);


const pricesSort=prices.sort((a,b)=>{
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
});

console.log(pricesSort);
console.log(pricesSort.reverse());


const sum=prices.reduce((a,b)=>{
    return a+b;
},0);
console.log("sum is " + sum);

const names=['gaurav','kesa'];

const names2=[...names];
console.log(" spread op " + names2);


const persons=[{name:'gaurav',age:'32'},{name:'deepa',age:53}];
const copiedPersons=[...persons];
persons.push({name:'gaurav3',age:'22'});
const copiedPersons2=[...persons.map(person=>({name:person.name,age:person.age}))]
console.log(persons , copiedPersons);

console.log(persons,copiedPersons2);

const sets=new Set([1,2,3]);
console.log(sets.has(1));
sets.add(4);
//sets.add(4);
console.log(sets);

for (const set of sets.entries()) {
    console.log(set);
}


for (const set of sets.keys()) {
    console.log(set);
}


const set2=new Set();
set2.add("gaurav");
set2.add("kesa");
set2.add("wgl");
set2.add("ok");
console.log(set2);
//converting an set to array 
set2.forEach(e=>console.log(e));
let a=[1,2,3,4,5,6,7,8,9,10];
const arrayForm=new Set(a);
console.log(arrayForm);
const array2=Array.from(arrayForm);
console.log(array2);
array2.filter(a=>a%2==0).map(a=>a).forEach(e=>console.log(e));


let b=['gaurav','kesa','wgl','hyd'];
const setForm=new  Set([...b]);
console.log(setForm);
const aForm=Array.from(setForm);
console.log(aForm);
aForm.filter(a=>a.startsWith("k")).filter(a=>a.endsWith("a")).forEach(a=>console.log(" \t values are " + a));
//aForm.filter(a=>a.split(":")).forEach(a=>console.log(a));
aForm.push("g2");
console.log(aForm);
setForm.add("g3");
console.log(aForm);

aForm.filter(a=>a.includes("g3")).forEach(e=>console.log("values is " + e));
aForm.filter(a=>a.includes("g2")).map(a=>a.toUpperCase()).forEach(a=>console.log(a));

const maps=new Map();
maps.set(1,"gaurav");
maps.set(2,"deepa");
maps.set(3,"je2");
console.log(maps);
for (const [key,value] of maps.entries()) {
    console.log(key,value);
    
}
if(maps.has(1)){
    console.log(maps);
}



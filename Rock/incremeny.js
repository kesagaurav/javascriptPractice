let a=1;
console.log(++a +  a++);
let b=1;
let c=b++;//postfix increment
console.log(b);

let d=1;
let e=++d;
console.log("value is ",e);


let cars=['toyota','bmw','maruti','sumo'];
// for (const car of cars) {
//     if(car==='toyota')
//         console.log(car);

    
// }

let cars2=cars.map(a=>a.toUpperCase()).filter(a=>a.startsWith("T")).forEach(e=>console.log(e));

const { object } = require("underscore");

const gy={
    title:'DSE1',
    sal:'900000',
    price:'10000'
};

const gy2=[
    {
        title:'DSE',
        sal:'900000',
        price:'10000'
    },
    {
        title:'DSP',
        sal:'900000',
        price:'100000'
    },
    {
        title:'PP',
        sal:'9000100',
        price:'100100'
    }
]

let gy3=gy2.map(a=>{
    let title;
    for (const key in gy) {
      title=a.title===gy[key].title ? true:false;   
    }
    
    return {...a,title};
});


    
for (let element of gy2) {
   console.log(gy2[element]?.price);
   
}


const arr1=[1,2,3];
const arr2=[...arr1];
console.log("values are " + arr2);
arr2.push(4);
console.log("values after updateing " + arr2);


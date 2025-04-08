const randomNumber = Math.random (); // produces random number between 0 (including) and 1 (excluding)

// const a = randomNumber > 0.7 ? alert ('true') : null;
// console.log (a);

if(randomNumber>=0.7){
   // alert('true');
}else{
    console.log('lowest');
    
}
const b = [1, 2, 3, 4, 5];
b.reverse;
console.log("reverse is " + b);

for (var i = 0; i < b.length; i++) {
  console.log (b[i]);
}
for (const element of b) {
  console.log (element);
}
//last ele to first
console.log ('last ele to first');

for (var i = b.length - 1; i >= 0; i--) {
  console.log (i);
}

//random no

const randomNumber2 = Math.random();
if(randomNumber>=0.7&&randomNumber2>=0.7){
    //alert('greater');
}
else if(randomNumber<=0.2 || randomNumber2<=0.2){
    //alert('smaller');
}

let ceil=Math.ceil(23834/100)*100;
console.log(ceil);



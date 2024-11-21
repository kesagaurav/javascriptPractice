function sayHi(name){ //here name is parameter
    console.log(name); 
}
let a=sayHi("gaurav"); //here this is the argument means we are setting the value.
console.log(a);

const gameStart=document.getElementById('start-game');



//start();//hoisted at top can be declared anywhere in the file.
// function start(){
//     console.log("game is staring....");
// };
//here where errors come with this function we will get an idea where the error was so in console it showing button.start
// function start(){
//     console.log("game is staring....",gaurav);
// };

const s1=function start(){
    console.log("game is staring....");
};//so here we cannot host the function at the top.cant be declared else where within the file.
//user has to see everytime where i wrote the variable 
//gameStart.addEventListener('click',start);

//anonymous function.

//here the user will not see where i declare the variable but here he will able to see what will happen directly if the user click on this lister or button.
// gameStart.addEventListener('click',function startGaurav(){ //here when we use error as anomyous function then we will get it as button.anyomous
//     console.log("game is staring.... in anoymous function",gaurav);
// });
const ROCK='ROCK';
const PAPER='PAPER';
const SCSIOOR='SCSIOOR';
const DEFAULT_USER='ROCK';
const RESULT_DRAW='DRAW';
const RESULT_PLAYER_WINS='PLAYER_WINS';
const RESULT_COMPUTER_WINS='COMPUTER_WINS';
let gameIsRunning=false;
// const playerChoice=function(){
//     const selection=prompt(`${ROCK},${PAPER} or ${SCSIOOR}?`,'').toUpperCase();
//     if(selection!=ROCK && selection!=PAPER && selection!=SCSIOOR){
//         alert(`invalid user  we chhose ${DEFAULT_USER} for you`);
//         return DEFAULT_USER;
//     }
//     return selection;

// };

const playerChoice=()=>{
    const selection=prompt(`${ROCK},${PAPER} or ${SCSIOOR}?`,'').toUpperCase();
    if(selection!=ROCK && selection!=PAPER && selection!=SCSIOOR){
        alert(`invalid user  we chhose ${DEFAULT_USER} for you`);
        return DEFAULT_USER;
    }
    return selection;

};

// const getComputerChoice=function(){
//     const value=Math.random();
//     if(value<0.34){
//         return ROCK;
//     }else if(value<0.67){
//         return PAPER;
//     }else{
//         return SCSIOOR;
//     }
// };


const getComputerChoice=()=>{
    const value=Math.random();
    return value < 0.34 ? ROCK : value < 0.67 ? PAPER : SCSIOOR;
    // if(value<0.34){
    //     return ROCK;
    // }else if(value<0.67){
    //     return PAPER;
    // }else{
    //     return SCSIOOR;
    // }
};

// const getWinner=function(cChoice,pChoice){
//     if(cChoice===pChoice){
//         return RESULT_DRAW; // this is we using normal functions.
//     }else if((cChoice===ROCK && pChoice===PAPER)||
//         (cChoice===PAPER && pChoice===SCSIOOR)||
//         (cChoice===SCSIOOR && pChoice===ROCK)){
//         return RESULT_PLAYER_WINS;
//     }else{
//         return RESULT_COMPUTER_WINS;
//     }
// };

// this is arrow function
const getWinner=(cChoice,pChoice)=>cChoice===pChoice ? RESULT_DRAW : (cChoice===ROCK && pChoice===PAPER)||
    (cChoice===PAPER && pChoice===SCSIOOR)||
    (cChoice===SCSIOOR && pChoice===ROCK) ? RESULT_PLAYER_WINS:RESULT_COMPUTER_WINS
    // if(cChoice===pChoice){
    //     return RESULT_DRAW;
    // }else if((cChoice===ROCK && pChoice===PAPER)||
    //     (cChoice===PAPER && pChoice===SCSIOOR)||
    //     (cChoice===SCSIOOR && pChoice===ROCK)){
    //     return RESULT_PLAYER_WINS;
    // }else{
    //     return RESULT_COMPUTER_WINS;
    // }


gameStart.addEventListener('click',()=>{
     //here when we use error as anomyous function then we will get it as button.anyomous
        if(gameIsRunning){
            return;
        }
     console.log("game is staring.... in anoymous function");
    gameIsRunning=true;
    const player=playerChoice();
    const computer=getComputerChoice();
    const winner=getWinner(computer,player);
   // console.log(player);
    console.log(winner);
    let message=`you picked ${player},computer picked ${computer} therefore you`;
    if(winner===RESULT_DRAW){
       message= message + 'draw';
    }else if(winner===RESULT_PLAYER_WINS){
        message=message + 'won.';
    }else {
        message=message + 'lost.';
    }
    alert(message);
    gameIsRunning=false;
});






// const person={ //functions using inside the object
//     greet:function greet(){
//         console.log("heelo greet");
//     }
// };

// person.greet();

function multiply(num1, num2 = 1) {
    return num1 * num2;
}
console.log(multiply(10, 'a'));


function candidate(name) {
    this.name = name;
}
candidate.prototype.getName = () => {
    return this.name;
};
const alex = new candidate('Alex');
console.log(alex.getName());

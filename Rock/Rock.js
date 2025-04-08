const rockArr=['rock','paper','scissors'];
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");
const playerChoice=document.getElementById("player-choice");
const compChoice=document.getElementById("computer-choice");
const choice=document.getElementById("choice");
const result=document.getElementById("result");

// const getPlayerChoice=()=>{
//     const c=prompt('enter rock,paper,scsiiors');
//     c.toLowerCase();
    
// }
// const computerChoice=()=>{
       
//             const random=Math.random();
//            return rockArr[random];
            
        
       
// };

// const winner=(playerChoice1,compChoice2)=>{
//     if(playerChoice1==='rock'&&compChoice2==='scissors' || playerChoice1==='scissors'&&compChoice2==='paper'||playerChoice1==='paper'&&compChoice2==='scissors'){
//         return 'i ahd won';
//     }else if(playerChoice1===compChoice2){
//         return 'its a tie';
        
//     }else{
//         return 'cmputer has won';

//     }
    
// }
// playerChoice.textContent=`${playerChoice} wins`;
// compChoice.textContent=`${compChoice} wins`;

// const playerChoice1=getPlayerChoice();
// const computerChoice1=computerChoice();
// const winners=winner(playerChoice1,computerChoice1);
// console.log(`you won ${playerChoice1}`);
// console.log(`comp won ${computerChoice1}`);
// console.log(winners);


const playGame=(userChoice)=>{
    const random=Math.random();
    const computerChoice2=rockArr[random*rockArr.length];
    if(userChoice===computerChoice2){
        result.textContent='its a tie'
    }else if(userChoice==='rock'&&computerChoice2==='scissors' || userChoice==='scissors'&&computerChoice2==='paper'||userChoice==='paper'&&computerChoice2==='scissors'){
        result.textContent='you won !!!';
    }else{
        result.textContent='computer won';
    }

}

rock.addEventListener('click',playGame("rock"));
paper.addEventListener('click',playGame("paper"));
scissors.addEventListener('click',playGame("scissors"));


const weather=()=>{
  const we=  fetch("https://jsonplaceholder.typicode.com/users/1/albums").then(res=>res.json()).then(res=>console.log(res));
console.log(we);

}
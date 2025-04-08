const maxLife=100;
const attackValue=10;
const MONSTER_ATTACK_VALUE=14;
let currentMonsterHealth=maxLife;
let currentPlayerHealth=maxLife;
adjustHealthBars(maxLife);

function attackHandler(){
 const damage=dealMonsterDamage(attackValue);
  currentMonsterHealth-=damage;
    const playerDamage=dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth-=playerDamage;
  if(currentMonsterHealth<=0&&currentPlayerHealth>=0){
    alert('You won!');
  }else if(currentPlayerHealth<=0&&currentMonsterHealth>0){
    alert('You Lost!');
  }else if(currentMonsterHealth<=0&&currentPlayerHealth<=0){
    alert('draw');
  }
}

attackBtn.addEventListener('click',attackHandler);
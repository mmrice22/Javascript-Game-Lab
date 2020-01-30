"use sctipt";
const randomDamage = () => {
  return Math.floor(Math.random() * 10) + 1;
};
// console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  // ternary operator - if randNum is 0, run option 1. if its not, run opt 2
  return randNum === 0 ? opt1 : opt2;
};
// to show that the above function works
// console.log(chooseOption("Mitch","melissa"))

// FUNCTION EXPRESSION
const attackPlayer = function(health) {
  return health - randomDamage();
};

// Arrow function Health
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}.`);
};

// Arrow function Winner/Loser
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

// Arrow Function Dead
const isDead = health => {
  return health <= 0 ? true : false;
};

// Function Declaration fight
// the main game function
function fight(player1, player2, player1Health, player2Health) {
//   while true
    while (true) {
//  determine which player will attack
    let attacker = chooseOption(player1, player2);
//   if player 1 is the attacker 
    if (attacker === player1) {
// update player2 healths
    player2Health = attackPlayer(player2Health);
// log player 2 health 
    logHealth(player2, player2Health);
// if player 2 isDead 
    if (isDead(player2Health)) {
    //    log player1 as winner
        logDeath(player1, player2);
        break;
      }
    //   else player 2 is the attacker
    } else {
    // update player1s health 
    player1Health = attackPlayer(player1Health);
    // log player1s health 
    logHealth(player1, player1Health);
    // if player 1 isDead  
    if (isDead(player1Health)) {
 // log player2 as the winner
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Melissa", "Grant", 100, 100);

"use sctipt";
const randomDamage = () => Math.floor(Math.random() * 10) + 1;;
// to show that function above works
// console.log(randomDamage());


const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random()*2);
    // ternary operator - if randNum is 0, run option 1. if its not, run opt 2
    return randNum === 0 ? opt1 : opt2;
}
// to show that the above function works
// console.log(chooseOption("Mitch","melissa"))

// FUNCTION EXPRESSION
const attackPlayer = function (health) {
    return health - randomDamage;
}

// Arrow function Health
const logHealth = (player, health) => {
 console.log(`${player} health: ${health}.`);
}

// Arrow function Winner/Loser
const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

// Arrow Function Dead
const isDead = (health) => {
    return health <= 0 ? true : false;
}
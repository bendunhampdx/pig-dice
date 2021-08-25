

function Player1()  {
  player1TotalCount = 0
  player1TurnCount = 0
  player1DiceRoll = 0
}


function playerOneDiceRoll() {
 let min = 1;
 let max = 6;
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min) + min)  
}

let scoreArray = [];
function score() {
  
  player1TotalCount = 0
  let currentScore = player1TotalCount;
  if (playerOneDiceRoll() !== 1) {
    scoreArray.push(playerOneDiceRoll());
    console.log(scoreArray);
  } else 
  return currentScore
}





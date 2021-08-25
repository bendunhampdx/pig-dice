function Player(playerName, player1TurnCount, player1TotalCount, yourTurn) {
  this.playerName = playerName;
  this.player1TurnCount = player1TurnCount;
  this.player1TotalCount = player1TotalCount;
  this.yourTurn = yourTurn;
}


let Player1 = {
  playerName: "Ben",
  player1TurnCount: 0,
  player1TotalCount: 0,
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
  let roll = playerOneDiceRoll();
  if (roll !== 1) {
    scoreArray.push(roll);
  } else {
    scoreArray = [];
  }
  let sum = 0;
  for (let i = 0; i < scoreArray.length; i ++) {
    sum += scoreArray[i];
  }
  return sum;
}

// Player.prototype.calculateScore = function(scoreArray) {
//   let sum = 0;
//   for (let i = 0; i < scoreArray.length; I ++) {
//     sum += scoreArray[i];
//   }

// }

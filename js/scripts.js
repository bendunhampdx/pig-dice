function Player() {
  this.turnCount = 0;
  this.totalCount = 0;
}

let player1 = new Player(0, 0)

Player.prototype.diceRoll = function() {
  let min = 1;
  let max = 6;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)  
}


Player.prototype.score = function() {
  let playerScore = this.diceRoll();
  if (playerScore !== 1) {
    this.turnCount += playerScore
  } else if (playerScore === 1) {
    this.turnCount = 0;
   
  } 
  console.log(this.turnCount)
  return this.turnCount
}






// for (let i = 0; i < turnCount.length; i ++) {
//   this.totalCount += turnCount[i];




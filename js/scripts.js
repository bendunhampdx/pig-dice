function Player() {
  this.turnCount = 0;
  this.totalCount = 0;
}

let player1 = new Player(0, 0)
let player2 = new Player(0, 0)

Player.prototype.diceRoll = function() {
  let min = 1;
  let max = 7;
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
  return this.turnCount
}

Player.prototype.hold = function() {
  this.totalCount += this.turnCount;
  this.turnCount = 0;
}


$(document).ready(function() {
  $("button#roll").click(function(event) {
    event.preventDefault();
    let player1 = new Player(0, 0)
    // let player2 = new Player(0, 0)
   
    player1.score();
    
    $("#player1CS").html(player1.turnCount)
    player1.hold();
    $("#player1TS").html(player1.totalCount)
    // event.preventDefault();
    
    console.log(player1);
    // player2.score();
    
    // $("#player2CS").html(player2.turnCount)
    // // player2.hold();
    // // $("#player2TS").html(player2.totalCount)
    // event.preventDefault();
   
    // console.log(player2)
  })
})

// once user clicks roll button, dice rolls and adds to turn count


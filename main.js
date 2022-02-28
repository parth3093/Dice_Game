
var choice1, choice2, randomImageSource1, randomImageSource2,try1,try2;

const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const reset = document.getElementById('reset');
const playButton = document.querySelectorAll('.play-btn');
const displayWinner = document.querySelector('.displayWinner')
const scoreboard = {
  player1: 0,
  player2: 0
}

// Play game
function play(e){
  const player1choice = getPlayer1Choice();
  const player2choice = getPlayer2Choice();
  const winner = getWinner(player1choice,player2choice);
  updateScore();
}

// Player1 choice function
function getPlayer1Choice(){
  try1 = Math.floor(Math.random() * 6) + 1;
  randomImageSource1 = "images/dice" + try1 + ".png";
  choice1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
  console.log(try1);
}

// Player2 choice function
function getPlayer2Choice(){
  try2 = Math.floor(Math.random() * 6) + 1;
  randomImageSource2 = "images/dice" + try2 + ".png";
  choice2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  console.log(try2);
}

// Get winner
function getWinner(p,c){
  if(randomImageSource1 > randomImageSource2){
    scoreboard.player1++;
    displayWinner.innerHTML = "Player 1";
  }else if(randomImageSource2 > randomImageSource1){
    scoreboard.player2++;
    displayWinner.innerHTML = "Player 2";
  }else {
    displayWinner.innerHTML = "Draw";
  }
}

// Update score
function updateScore(){
displayWinner.style.display = 'block';
score.innerHTML = `<h1>Scoreboard</h1>
<hr>
<h2>Player 1 : ${scoreboard.player1}</h2>
<h2>Player 2 : ${scoreboard.player2}</h2>
`;
}

// Reset game
function resetGame(){
  scoreboard.player1 = 0;
  scoreboard.player2 = 0;
  displayWinner.innerHTML = 'N/A';
  score.innerHTML = `<h1>Scoreboard</h1>
<hr>
<h2>Player 1 : 0</h2>
<h2>Player 2 : 0</h2>
`;
}


playButton.forEach(choice => choice.addEventListener('click', play));
reset.addEventListener('click', resetGame)
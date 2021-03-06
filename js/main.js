const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
// const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
  player: 0,
  house: 0
}

// Play Game
function play(e){
  restart.style.display = 'inline-block';

  const playerChoice = e.target.id;

  const houseChoice = getHouseChoice();

  const winner = getWinner(playerChoice, houseChoice);

  showWinner(winner, houseChoice, playerChoice);
}


// Get House Choice 
function getHouseChoice() {
  const rand = Math.random();

  if(rand < 0.34) {
    return 'rock'; 
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get Game Winner 
function getWinner(p,h) {
  if (p === h) {
    return 'draw';
  } else if (p === 'rock') {
    if (h === 'paper') {
      return 'house';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (h === 'scissors') {
      return 'house';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (h === 'rock') {
      return 'house';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, houseChoice, playerChoice) {
  if (winner === 'player') {
    // Increase Player Score
    scoreboard.player++;
    // Show Modal Result
    result.innerHTML = `
      <h4 class="text-win">You Win</h4>
      <p>You picked <strong>${playerChoice}</strong></p>
      <i class="fas fa-hand-${playerChoice} fa-2x"></i>
      <p>House picked <strong>${houseChoice.charAt(0).toUpperCase() + houseChoice.slice(1)}</strong></p>
      <i class="fas fa-hand-${houseChoice} fa-2x"></i>
    `;

    } else if (winner === 'house') {
    scoreboard.house++;
    result.innerHTML =  `<h4 class="text-lose">You Lose</h4>
    <p>You picked <strong>${playerChoice}</strong></p>
    <i class="fas fa-hand-${playerChoice} fa-2x"></i>
    <p>House picked <strong>${houseChoice.charAt(0).toUpperCase() + houseChoice.slice(1)}</strong></p>
    <i class="fas fa-hand-${houseChoice} fa-2x"></i>
    `;

    } else {
    result.innerHTML = `<h4 class="text-draw">It's a draw!</h4>
    <p>You picked <strong>${playerChoice}</strong></p>
    <i class="fas fa-hand-${playerChoice} fa-2x"></i>
    <p>House picked <strong>${houseChoice.charAt(0).toUpperCase() + houseChoice.slice(1)}</strong></p>
    <i class="fas fa-hand-${houseChoice} fa-2x"></i>
    `;
  }
  // Show Score
  score.innerHTML = `<p>${scoreboard.player}</p> `;
  modal.style.display = 'block';
}

// Clear Modal
function clearModal(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.house = 0;
  score.innerHTML = `
    <p>0</p>
  `;
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);


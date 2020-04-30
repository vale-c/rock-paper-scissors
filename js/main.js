const choices = document.querySelectorAll('.choice');
const score = document.getElementsByClassName('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
  player: 0,
  computer: 0
}

// Play game
function play(e){
  restart.style.display = 'inline-block';
  const playerChoice = e.target.className;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
  console.log("Computer score:", scoreboard.computer);
  console.log("Player score:", scoreboard.player);
}

// Get Computer choice 
function getComputerChoice() {
  const rand = Math.random();

  if(rand < 0.34) {
    return 'rock'; 
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get game winner 
function getWinner(p,c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    // Increase player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = `<h1 class="text-win">You Win</h1>
        <p class="computer">Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
  `;
    
  } else if (winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML =  `<h1 class="text-lose">You Lose</h1>
        <p class="computer">Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
  `;

  } else {
    result.innerHTML = `<h1 class="text-draw">It's a draw!</h1>
        <p class="computer">Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `;
  }
  //Show Score
  score.innerHTML = ` <p>Player: ${scoreboard.player}</p>
                      <p>Computer: ${scoreboard.computer}</p>
                    `;

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
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
window.addEventListener('click', restartGame);


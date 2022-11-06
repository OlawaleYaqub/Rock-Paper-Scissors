let playerSelection = prompt("Choose your weapon").toLowerCase();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let gameRul = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * gameRul.length);
  return gameRul[randNum];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore = computerScore++;
    return "You lose! Computer won :) Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore = playerScore++;
    return "You won! Computer lost :) Paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore = computerScore++;
    return "You lost! Computer won :) Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore = playerScore++;
    return "You won! Computer lost :) Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It a tie! nobody won :) Rock cannot beat Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It a tie! nobody won :) Paper cannot beat paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore = computerScore++;
    return "Computer won :) Scissors  beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore = playerScore++;
    return "You won :) Scissors beats paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It a tie! nobody won :) Scissors cannot beat Scissors";
  } else {
    return "Invalid input";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    return "You won";
  } else {
    return "Computer Won";
  }
}

game();

// console.log(playerRound(playerSelection, computerSelection));

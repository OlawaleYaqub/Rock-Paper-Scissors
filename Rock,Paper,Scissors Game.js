let computerSelection = getComputerChoice();
let playerScore = 0;  
let computerScore = 0;

function getComputerChoice() { //Function to get random computer choice 
  let gameRul = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * gameRul.length);
  return gameRul[randNum];
}

function playRound(playerSelection, computerSelection) { //Function to receive user input and computer choice 
  if (playerSelection === computerSelection) {
     console.log(`The game is tie ${playerSelection} cannot beat ${computerSelection}`)
    ;
  }
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    computerScore++;
    console.log(`computer score is ${computerScore} and playerScore is ${playerScore}`);
  }
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    console.log(`player score is  ${playerScore} and computer score ${computerScore}`);
  }
  else if (computerScore > playerScore) {
   console.log("Computer Won this round")
  } 
  if (playerScore > computerScore) {
    console.log("Player Won this round")
  }
  if (playerScore === computerScore) { 
  console.log("It a tie Nobody won")
  }
  
}

function game() { //Function to store rounds of games and keep scores updated 
  for (let i = 0; i < 5; i++) { //Creates a loop of 5 rounds 
    let playerSelection = prompt("Choose your weapon").toLowerCase(); //Coerce user input to lowercase
    playRound(playerSelection, computerSelection); //Executing the playround()
    
  }
}

game();


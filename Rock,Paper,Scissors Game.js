const choiceBtn = document.querySelectorAll("button");  // Select all the button elements and store them in the choiceBtn variable
const section = document.querySelector("section");  // Select the section element and store it in the section variable
const playerScores = document.querySelector(".playScore");  // Select the element with class "playScore" and store it in the playerScores variable
const computerScores = document.querySelector(".comScore");  // Select the element with class "comScore" and store it in the computerScores variable

let playerSelection;  // Declare a variable to store the player's selection
let playerScore = 0;  // Initialize the player's score to 0
let computerScore = 0;  // Initialize the computer's score to 0
let computerSelection = getComputerChoice();  // Call the getComputerChoice function to get a random computer selection and store it in the computerSelection variable
let result = document.querySelector(".resultText");  // Select the element with class "resultText" and store it in the result variable

choiceBtn.forEach((button) => {  // Iterate over each button in the choiceBtn array
  button.addEventListener("click", () => {  // Add a click event listener to each button
    if (playerScore === 5 || computerScore === 5) {  // Check if either player has reached a score of 5
      return; // Game is already over, ignore further button clicks
    }
    
    playerSelection = button.innerText;  // Set the player's selection to the text content of the clicked button
    computerSelection = getComputerChoice();  // Call the getComputerChoice function to get a new random computer selection
    result.textContent = playRound(playerSelection, computerSelection);  // Call the playRound function with the player's selection and computer's selection, and update the result text content

    if (playerScore === 5 || computerScore === 5) {  // Check if either player has reached a score of 5 after the round
      declareWinner();  // Call the declareWinner function to display the game over message
      return; // Game is over, stop further button clicks
    }
  });
});

function getComputerChoice() {
  // Function to get random computer choice
  return choiceBtn[Math.floor(Math.random() * choiceBtn.length)].innerText;  // Return a random button's text content from the choiceBtn array
}

// Function to receive user input and computer choice
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `The game is tie ${playerSelection} cannot beat ${computerSelection}`;  // Return a tie message if the selections are the same
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors")
  ) {
    computerScore++;
    computerScores.textContent = computerScore;  // Increment the computer's score and update the text content of the computerScores element
    return `Computer Won ${computerSelection} beat ${playerSelection}`;  // Return a message indicating the computer won
  }
  if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    playerScores.textContent = playerScore;  // Increment the player's score and update the text content of the playerScores element
    return `You Won! ${playerSelection} beat ${computerSelection}`;  // Return a message indicating the player won
  }
}

function declareWinner() {
  if (playerScore === 5 && computerScore < 5) {
    result.textContent = 'Game Over. You Win!';  // Display "Game Over. You Win!" if the player's score is 5  and the computer's score is less than 5
  } else if (playerScore < 5 && computerScore ===5) {
    result.textContent = 'Game Over. You Lose!';  // Display "Game Over. You Lose!" if the player's score is less than 5 and the computer's score is 5 
  }
}

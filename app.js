let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomChoice];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "Draw!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Draw!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "Draw!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "you win! rock beats scissors!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "you lose! paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "you win! paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "you lose! scissors beats paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "you lose! rock beats scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "you win! scissors beats paper!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Make your selection").toLocaleLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    return "Congradulations you beat the computer!";
  } else if (playerScore < computerScore) {
    return "Ouch! you lost to the computer! ";
  } else {
    return "Wow you and the computer think alike!";
  }
}

console.log(game());

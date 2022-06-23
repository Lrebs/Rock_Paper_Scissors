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
    return "you win! rock beats scissors!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "you lose! paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "you lose! paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "you lose! scissors beats paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "you lose! rock beats scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "you win! rock scissors beat paper!";
  }

  console.log(playerSelection, computerSelection);
}
playRound();

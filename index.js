function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomChoice];
  return computerChoice;
}

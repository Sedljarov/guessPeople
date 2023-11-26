const userGuessInput = document.getElementById("user-guess");
const guessButton = document.getElementById("guess-btn");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart-btn");

let secretNumber;
let attempts = 0;

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.innerText = "Try to guess the number I'm thinking of between 1 and 100.";
  userGuessInput.value = "";
}

resetGame();

guessButton.addEventListener("click", function () {
  const userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.innerText = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;

  if (userGuess < secretNumber) {
    message.innerText = `Try higher. Attempts: ${attempts}`;
  } else if (userGuess > secretNumber) {
    message.innerText = `Try lower. Attempts: ${attempts}`;
  } else {
    message.innerText = `Congratulations! You guessed the number (${secretNumber}) in ${attempts} attempts.`;
  }
});

restartButton.addEventListener("click", function () {
  resetGame();
});

"use strict";
let randomNumber = generateNumber();

game();
function game() {
  let score = 20;
  let highScore = 0;
  randomNumber = generateNumber();
  updateTextContent(".score", `${score}`);

  document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // when no input is given
    if (!guess) {
      displayMessage("🙅 No number Entered");
    }
    // when guessed correctly
    else if (guess === randomNumber) {
      displayMessage("🎉🥳 You guessed Correctly");
      correctGuess();
    }
    // when guessed incorrectly
    else {
      if (guess > randomNumber) {
        displayMessage("⬇️ Guess a lower number");
      } else {
        displayMessage("⬆️ Guess a higher number");
      }
      updateScore();
    }
  });

  function correctGuess() {
    // Updating "?"
    updateTextContent(".number", randomNumber);
    //Update css

    // document.querySelector('body').style.backgroundColor = '#60b347';
    updateCssBackgroundColor("body", "#60b347");

    updateCssWidth(".number", "30rem");

    //Update Highscore
    if (score >= highScore) {
      highScore = score;
    }
    updateTextContent(".highscore", `${highScore}`);
    return;
  }

  function updateScore() {
    score--;
    // when game is lost
    if (score <= 0) {
      displayMessage("😭 You lost the game");
      score = 0;
    }
    updateTextContent(".score", `${score}`);
  }
}

function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

document.querySelector(".again").addEventListener("click", function () {
  resetGame();
});

function resetGame() {
  document.querySelector(".guess").value = "";

  displayMessage("Start guessing...");

  updateCssBackgroundColor("body", "#222");
  updateCssWidth(".number", "15rem");

  updateTextContent(".number", "?");
  game();
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function updateTextContent(tagOrClassName, value) {
  document.querySelector(tagOrClassName).textContent = value;
}

function updateCssBackgroundColor(tagOrClassName, value) {
  document.querySelector(tagOrClassName).style.backgroundColor = value;
}

function updateCssWidth(tagOrClassName, value) {
  document.querySelector(tagOrClassName).style.width = value;
}

function checkScreenSize() {
  if (window.innerWidth < 600) {
    alert(
      "This site + small screens = not a great match! For the best experience, use a bigger screen! 😉"
    );
  }
}

// Run when the page loads
window.onload = checkScreenSize;

// Run when the window is resized
window.onresize = checkScreenSize;

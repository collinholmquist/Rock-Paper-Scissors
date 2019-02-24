let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice() {

  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3 );

  return choices[randomNumber];
}

function convertToWord(userChoice) {
  if (userChoice === "rock") return "Rock";
  if (userChoice === "paper") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " beats " +
    convertToWord(computerChoice) + ". You win!";

  document.getElementById(userChoice).classList.add('green-glow');

  setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = convertToWord(computerChoice) + " beats " +
    convertToWord(userChoice) + ". You lose....";

    document.getElementById(userChoice).classList.add('red-glow');

    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = "It's a draw!";

  document.getElementById(userChoice).classList.add('gray-glow');

  setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 500);
}


function game(userChoice) {
  const computerChoice = getComputerChoice();

  console.log(userChoice);

  switch (userChoice + computerChoice) {

    //cases where the user wins
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
      win(userChoice, computerChoice);
    break;

    //cases where the computer wins
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
      lose(userChoice, computerChoice);
    break;

    //cases where there is a draw
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
      draw(userChoice, computerChoice);
    break;

  }
}



function main() {
  rock_div.addEventListener('click', () => game("rock"))

  paper_div.addEventListener('click',() => game("paper"))

  scissors_div.addEventListener('click',() => game("scissors"))
}

main();

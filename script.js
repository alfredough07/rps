const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";

    case 1:
      return "Paper";

    case 2:
      return "Scissors";
  }
};


// const getHumanChoice = () => {
//   let choice = prompt("Rock, Paper or Scissors").toLowerCase();
//   while (!["rock", "paper", "scissors"].includes(choice)){
//     console.log("Invalid choice")
//     choice = prompt("Rock, Paper or Scissors").toLowerCase();

//   }
//   return choice.charAt(0).toUpperCase() + choice.slice(1);  
// };

let humanScore = 0
let computerScore = 0
const results = document.querySelector(".results");
let roundNumber = 0;

const playRound = (humanChoice, computerChoice) => {
  let outcome = "";
  if (humanChoice === computerChoice) {
    outcome = "Tie";
} else if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
) {
    outcome = "You lose!";
    computerScore++;
} else {
    outcome = "You win!";
    humanScore++;
}
    roundNumber++;
    if (roundNumber > 5){
      let winnerMessage = ""
      if (humanScore > computerScore){
        winnerMessage = "HUMAN WON!"
      }
      else if(humanScore < computerScore){
        winnerMessage = "COMPUTER WON!"
      }
      else{
        winnerMessage = "TIEEEE !!!!!!"
      }
      results.innerHTML = `<p><strong> ${winnerMessage}</strong> <p>
          <p>Human ~ ${humanScore}, Computer ~ ${computerScore}</p>`
      humanScore = 0;
      computerScore = 0;
      roundNumber = 0;
      return;
    }
    results.innerHTML = `
    <p> <strong>Choices</strong>: Human ~ ${humanChoice}, Computer ~ ${computerChoice}</p>
    <p> <strong>Outcome</strong>: ${outcome} </p>
    <p> <strong>Round Number</strong>: ${roundNumber}</p>
    <p> <strong>Scores</strong>: Human ~ ${humanScore}, Computer ~ ${computerScore}</p>
    `

};


//Dom Manipulation

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const handleClick = (e) => {
  const humanChoice = e.target.textContent || e.target.alt;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}
rock.addEventListener("click", handleClick)
paper.addEventListener("click", handleClick)
scissors.addEventListener("click", handleClick)

const rockImg = document.getElementById("rockImg");
const paperImg = document.getElementById("paperImg");
const scissorsImg = document.getElementById("scissorsImg");
rockImg.addEventListener("click", handleClick)
paperImg.addEventListener("click", handleClick)
scissorsImg.addEventListener("click", handleClick)





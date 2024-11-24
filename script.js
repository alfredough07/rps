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


const getHumanChoice = () => {
  let choice = prompt("Rock, Paper or Scissors").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)){
    console.log("Invalid choice")
    choice = prompt("Rock, Paper or Scissors").toLowerCase();

  }
  return choice.charAt(0).toUpperCase() + choice.slice(1);
  
};

let humanScore = 0
let computerScore = 0

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice){
        console.log("Tie")
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper" || humanChoice==="Paper" && computerChoice ==="Scissors" || humanChoice==="Scissors" && computerChoice==="Rock")
    {
        console.log("You lose!");
        computerScore++;
    }
    else{
        console.log("You win!");
        humanScore++;
    }
    console.log(`Choices --> Human: ${humanChoice}, Computer:${computerChoice}`);
    console.log(`Scores --> Human: ${humanScore}, Computer: ${computerScore}`);
}
const playGame = () => {
for (let i=0; i<5; i++){
    console.log(`\nRound # ${i+1}`)
    let computer = getComputerChoice();
    let human = getHumanChoice();
    playRound(human, computer);

}
if (humanScore > computerScore){
    console.log(`Congrats! You won the game`)
}
else{
    console.log(`Sorry! You lost.`)
}
console.log()
}
playGame();
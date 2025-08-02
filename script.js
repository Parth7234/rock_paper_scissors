function playRound(humanChoice, computerChoice) {
    if(humanChoice==="rock"&&computerChoice==="scissors")return "human";
    if(humanChoice==="rock"&&computerChoice==="rock")return "draw";
    if(humanChoice==="rock"&&computerChoice==="paper")return "computer";
    if(humanChoice==="paper"&&computerChoice==="scissors")return "computer";
    if(humanChoice==="paper"&&computerChoice==="rock")return "human";
    if(humanChoice==="paper"&&computerChoice==="paper")return "draw";
    if(humanChoice==="scissors"&&computerChoice==="paper")return "human";
    if(humanChoice==="scissors"&&computerChoice==="rock")return "computer";
    if(humanChoice==="scissors"&&computerChoice==="scissors")return "draw";
}

function getHumanChoice(){
    choice=prompt("Enter your choice (Rock, Paper or Scissors)");
    return choice.toLowerCase();
}

function getComputerChoice(){
    num=Math.floor(Math.random()*3)+1;
    if(num===1)return "rock";
    else if(num===2)return "scissors";
    else return "paper";
}
bruh=5;
computerScore=0;
humanScore=0;
while(bruh--){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    winner=playRound(humanSelection, computerSelection);
    console.log(`Computer choses ${computerSelection}`)
    if(winner==="human"){
        console.log("You win this round!")
        humanScore++;
    }
    else if(winner==="computer"){
        console.log("You lose this round!")
        computerScore++;
    }
    else{
        console.log("This round was a draw")
    }
    }
console.log("Game Over!")
if(humanScore>computerScore)console.log("You win!")
else if(humanScore<computerScore)console.log("You lose!")
else console.log("This match was a draw")

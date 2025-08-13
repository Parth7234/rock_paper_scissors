function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") return "human";
    if (humanChoice === "rock" && computerChoice === "rock") return "draw";
    if (humanChoice === "rock" && computerChoice === "paper") return "computer";
    if (humanChoice === "paper" && computerChoice === "scissors") return "computer";
    if (humanChoice === "paper" && computerChoice === "rock") return "human";
    if (humanChoice === "paper" && computerChoice === "paper") return "draw";
    if (humanChoice === "scissors" && computerChoice === "paper") return "human";
    if (humanChoice === "scissors" && computerChoice === "rock") return "computer";
    if (humanChoice === "scissors" && computerChoice === "scissors") return "draw";
}

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) return "rock";
    else if (num === 2) return "scissors";
    else return "paper";
}
let roundsplayed = 0

const h = document.querySelector('#h')
const c = document.querySelector('#c')
const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    let choice = getComputerChoice()
    h.textContent = 'You chose rock'
    c.textContent = `Computer chose ${choice}`
    result = playRound('rock', choice);
    roundsplayed++;
    start(result)
})

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    let choice = getComputerChoice()
    h.textContent = 'You chose paper'
    c.textContent = `Computer chose ${choice}`
    result = playRound('paper', choice);
    roundsplayed++;
    start(result)
})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    let choice = getComputerChoice()
    h.textContent = 'You chose scissors'
    c.textContent = `Computer chose ${choice}`
    result = playRound('scissors', choice);
    roundsplayed++;
    start(result)
})

function endgame(){
    document.querySelectorAll('button').forEach(btn=>btn.disabled=true)
    const winner=document.createElement('div')
    if(humanScore>computerScore){
        winner.textContent='You Win the game'
    }
    if(humanScore<computerScore){
        winner.textContent='Computer wins the game'
    }
    if(humanScore===computerScore){
        winner.textContent='The game was a draw'
    }
    const finalMessage = document.createElement("div");
    finalMessage.textContent = "Game Over! Thanks for playing!";
    document.body.appendChild(winner)
    document.body.appendChild(finalMessage);
}

let computerScore = 0;
let humanScore = 0;
const w = document.querySelector('#w')
const hs = document.querySelector('#hs')
const cs = document.querySelector('#cs')
function start(result) {
    winner = result
    if (winner === "human") {
        w.textContent = 'You Win'
        humanScore++;
    }
    else if (winner === "computer") {
        w.textContent = 'Computer Wins'
        computerScore++;
    }
    else {
        w.textContent = 'Draw'
    }
    hs.textContent = `${humanScore}`
    cs.textContent = `${computerScore}`

    if (roundsplayed === 5) {
        endgame()
    }
}
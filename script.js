function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    let ComputerChoice;

    if (num === 0){
        return ComputerChoice = "Rock"
    }
    else if (num === 1){
        return ComputerChoice = "Paper"
    }
    else {
        return ComputerChoice = "Scissors"
    }
}

function getHumanChoice(){
    let HumanChoice = prompt("Rock/Paper/Scissors: ")

    if (HumanChoice === "Rock"){
        return HumanChoice = "Rock"
    }
    if (HumanChoice === "Paper"){
        return HumanChoice = "Paper"
    }
    if (HumanChoice === "Scissors"){
        return HumanChoice = "Scissors"
    }
}

let humanScore = 0
let computerScore = 0
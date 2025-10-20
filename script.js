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

console.log(getComputerChoice())
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

//this is a global variable, so you can use it wherever
let userChoice
let computerChoice
let result

//for every click I want this to happen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    //e for event. get the target id and save it as userChoice
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    //generates a computer choice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){

                            //this gives you a random number
    const randomNumber = Math.floor(Math.random() * 3) // or you cn use possibleChoices.length
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'paper'
    }
    if(randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's A Draw"
    }
    if (computerChoice === 'rock' && userChoice === "paper"){
        result = 'You Win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors"){
        result = 'You Lose!'
    }

    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You Lose!'
    }
    if(computerChoice === 'scissors' && userChoice === "rock") {
        result = "You Win!"
    }
    if(computerChoice === 'scissors' && userChoice === "paper"){
        result = "You Lose!"
    }
    
    
    resultDisplay.innerHTML = result
}
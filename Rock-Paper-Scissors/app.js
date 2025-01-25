let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score'); 
const compScorePara = document.querySelector('#comp-score'); 

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win :) your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You loose :) ${compChoice} beats your ${userChoice } `;
        msg.style.backgroundColor = "red";
    }
}

// generate a choice from comp
const genCompChoice = () => {
    let options = ["rock","paper","scissor"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}


const drawGame = () => {
    msg.innerText = "Game Draw! Play Again";
}


const playGame = (userChoice) => {
    // generate computer choice -> modular 
    const compChoice = genCompChoice();
    
    // draw game
    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "paper"){
            // comp - rock, scissor
            userWin = compChoice === "rock" ? true : false;
        } else if(userChoice === "scissor"){
            // comp - rock, paper
            userWin = compChoice === "paper" ? true : false;
        } else{
            // comp - paper, scissor
            userWin = compChoice === "scissor" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

// by selecting each choice from user
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);       
    });
});
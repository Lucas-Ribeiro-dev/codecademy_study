
let userPlay = 'paper';
const choice = document.querySelectorAll('.user-choice');
const resultText = document.getElementById('result-text');
const finalResult = document.getElementById('final-result');


choice.forEach(userChoice => {
    userChoice.addEventListener('click', function () {
        userPlay = this.id;

        const computerPlay = getComputerChoice();
        const result = playRound(userPlay, computerPlay);

        resultText.innerHTML = `
        You chose: ${userPlay.toUpperCase()}
        <br> Computer chose: ${computerPlay.toUpperCase()}
        `;

        finalResult.innerHTML = `<br> ${result}`;
    });
});

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}


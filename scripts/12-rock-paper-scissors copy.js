let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}



document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Looses: ${score.losses}, Ties: ${score.ties}`

let isAutoPlaying = false;
let intervalId;
const autoPlayButtonElement = document.querySelector(".auto-play-button")
console.log(autoPlayButtonElement.innerHTML);

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(function () {
            const palyerMove = pickComputerMove();
            playGame(palyerMove);

        }, 1000);
        autoPlayButtonElement.innerHTML = "Stop Play"
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        autoPlayButtonElement.innerHTML = "Auto Play"
    }

}


function playGame(playerMove) {

    const computerMove = pickComputerMove()
    let result = '';
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie'
        }


        if (result === 'You win.') {
            score.wins += 1;
        } else if (result === 'You lose.') {
            score.losses += 1;
        } else if (result === 'Tie') {
            score.ties += 1;
        }
        updateScoreElement();
        updateResult(result)
        updateMoves(playerMove, computerMove)

        //alert(`You picked ${palyerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Looses: ${score.losses}, Ties: ${score.ties}`);

    }

    else if (playerMove === 'paper') {
        const computerMove = pickComputerMove()

        result = '';
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose.'
        }
        if (result === 'You win.') {
            score.wins += 1;
        } else if (result === 'You lose.') {
            score.losses += 1;
        } else if (result === 'Tie') {
            score.ties += 1;
        }
        updateScoreElement();
        updateResult(result)
        updateMoves(playerMove, computerMove)
        // alert(`You picked ${palyerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Looses: ${score.losses}, Ties: ${score.ties}`);

    }


    else if (playerMove === 'rock') {

        const computerMove = pickComputerMove()

        result = '';

        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.'
        }

        if (result === 'You win.') {
            score.wins += 1;
        } else if (result === 'You lose.') {
            score.losses += 1;
        } else if (result === 'Tie') {
            score.ties += 1;
        }
        updateScoreElement();
        updateResult(result)
        updateMoves(playerMove, computerMove)
        //alert(`You picked ${palyerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Looses: ${score.losses}, Ties: ${score.ties}`)
    }


}

function updateMoves(playerMove, computerMove) {
    document.querySelector('.js-moves').innerHTML = `You 
        <img src="/images/${playerMove}-emoji.png" alt="" class="move-icon">
        <img src="/images/${computerMove}-emoji.png" alt="" class="move-icon">
        Computer`
}

function updateResult(result) {
    document.querySelector('.js-result').innerHTML = `${result}`
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Looses: ${score.losses}, Ties: ${score.ties}`
    localStorage.setItem('score', JSON.stringify(score));

}

function pickComputerMove() {

    const randonNumber = (Math.random());
    let computerMove = '';
    if (randonNumber >= 0 && randonNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randonNumber >= 1 / 3 && randonNumber < 2 / 3) {
        computerMove = 'paper';

    } else if (randonNumber >= 2 / 3 && randonNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;

}


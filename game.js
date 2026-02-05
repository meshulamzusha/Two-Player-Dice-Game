const maxScore = 50
let currentPlayer = Math.floor(Math.random() * 2) + 1
let currentScore1 = 0
let currentScore2 = 0
let totalScore1 = 0
let totalScore2 = 0
let diceRollingCounter = 0
const dice1 = document.getElementById('dice-1')
const dice2 = document.getElementById('dice-2')
const currentScoreElement1 = document.getElementById('current-score-1')
const currentScoreElement2 = document.getElementById('current-score-2')
const totalScoreElement1 = document.getElementById('total-score-1')
const totalScoreElement2 = document.getElementById('total-score-2')
const playerContainer1 = document.getElementById('players-1-container')
const playerContainer2 = document.getElementById('players-2-container')
const rollDiceBtn = document.getElementById('roll-dice-btn')
const holdBtn = document.getElementById('hold-btn')
const maxScoreElement = document.getElementById('max-score')
holdBtn.addEventListener('click', onHoldButtonClick)
maxScoreElement.innerText += maxScore
rollDiceBtn.addEventListener('click', onRollDice)

function rollTwoDices() {
    const diceScore1 = Math.floor(Math.random() * 6) + 1
    const diceScore2 = Math.floor(Math.random() * 6) + 1

    dice1.textContent = diceScore1
    dice2.textContent = diceScore2

    dice1.classList.add(`dice-img${diceScore1}`)
    dice2.classList.add(`dice-img${diceScore2}`)

    if (diceScore1 == diceScore2) {
        return 0
    }

    return diceScore1 + diceScore2
}

function onRollDice() {
    diceRollingCounter += 1

    const rollScore = rollTwoDices()

    if (currentPlayer == 1) {
        if (!rollScore) {
            currentScore1 = 0
            diceRollingCounter = 0
            currentPlayer = 2
        } else {
            currentScore1 += rollScore
        }

        currentScoreElement1.innerText = currentScore1
    } else {
        if (!rollScore) {
            currentScore2 = 0
            diceRollingCounter = 0
            currentPlayer = 1
        } else {
            currentScore2 += rollScore
        }

        currentScoreElement2.innerText = currentScore2
    }

    if (diceRollingCounter == 5) {
        if (currentPlayer == 1) {
            totalScore1 += currentScore1
            currentScore1 = 0
            currentScoreElement1.innerText = 0
            totalScoreElement1.innerText = totalScore1
        } else {
            totalScore2 += currentScore2
            currentScore2 = 0
            currentScoreElement2.innerText = 0
            totalScoreElement2.innerText = totalScore2
        }

        diceRollingCounter = 0
        currentPlayer = currentPlayer == 1 ? 2 : 1
    }

    if (totalScore1 >= maxScore) {
        const winMessage = document.createElement('p')
        winMessage.innerText = 'Player 1 is the winner'
        playerContainer1.insertBefore(winMessage, playerContainer1.childNodes[2]);
        rollDiceBtn.disabled = true;
    }

    if (totalScore2 >= maxScore) {
        const winMessage = document.createElement('p')
        winMessage.innerText = 'Player 2 is the winner'
        playerContainer2.insertBefore(winMessage, playerContainer2.childNodes[2]);
        rollDiceBtn.disabled = true

    }
}

function onHoldButtonClick() {
    if (currentPlayer == 1) {
        totalScore1 += currentScore1
        totalScoreElement1.innerText = totalScore1
        currentScore1 = 0
        currentScoreElement1.innerText = currentScore1
        currentPlayer = 2
    } else {
        totalScore2 += currentScore2
        totalScoreElement2.innerText = totalScore2
        currentScore2 = 0
        currentScoreElement2.innerText = currentScore2
        currentPlayer = 1
    }
}






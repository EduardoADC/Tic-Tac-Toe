const TURN_X = 'X'
const TURN_O = 'O'

let currentTurn = TURN_X
let didPlayerWin = false;
const playerX = document.getElementById('playerX')
const playerO = document.getElementById('playerO')
const message = document.querySelector('.messages')


playerX.classList.add('current-turn')


function checkWinner() {
    const tiles = document.querySelectorAll('.tile');
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [6, 4, 2]
    ]

    for (let condition of winConditions) {
        if (tiles[condition[0]].innerText !== '' && tiles[condition[0]].innerText == tiles[condition[1]].innerText && tiles[condition[1]].innerText == tiles[condition[2]].innerText) { return true }
    }
    return false
}


const tiles = document.querySelectorAll('.tile')
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        if (tile.childNodes.length !== 0 || didPlayerWin) return;

        tile.innerText = currentTurn;
        
        const text = document.createElement('div')
        text.innerText = currentTurn + ' en cuadrante ' + tile.id
        message.append(text)

        didPlayerWin = checkWinner()
        if (didPlayerWin){  
            document.querySelector('#winner').innerText = 'El jugador ' + currentTurn + ' ha ganado' 
            return
        }
        currentTurn = currentTurn === TURN_X ? TURN_O : TURN_X
        playerO.classList.toggle('current-turn')
        playerX.classList.toggle('current-turn')
    })
})



    

const resetButton = document.getElementById('reset')
resetButton.addEventListener("click", () => {
    currentTurn = TURN_X
    didPlayerWin = false
    playerO.classList.remove('current-turn')
    playerX.classList.add('current-turn')
    tiles.forEach((tile) => {
        tile.innerText = ""
    message.innerText = ""
    document.querySelector('#winner').innerText = 'Tic-Tac-Toe'
    })
})
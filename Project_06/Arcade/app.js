//STATE
let state;

let gameState = {
    players: ['x', 'o'],
    board: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    currentPlayer: 'X',
}
let store = ['', '', '', '', '', '', '', '', ''];
let running = false;

// render
const renderState = () => {

};



// DOM SELECTORS
const cells = document.querySelectorAll(".game")
const statusGame = document.querySelector("#status")
const restartBtn = document.querySelector("#restart")






// HELPER FUNCTIONS
const updatedGame = (eachCell, index) => {
    if (store[index]) return;
    store[index] = gameState.currentPlayer;
    eachCell.textContent = gameState.currentPlayer;
    console.log(gameState.currentPlayer);
    changePlayer();
} 


const changePlayer = () => {
    gameState.currentPlayer = (gameState.currentPlayer === 'X') ? 'O': 'X';
    statusGame.textContent = `${gameState.currentPlayer}'s turn`;
}

const checkWinner = () => {
    for(let [cell1, cell2, cell3] of gameState.board) {
        if(store[cell1] && store[cell1] === store[cell2] && store[cell2] === store[cell3]) {
            alert('You Win')
        } 

    }
}

const restartGame = () => {
    store = ['', '', '', '', '', '', '', '', ''];
    const gameDiv = document.getElementById('gamecontainer')
    gameDiv.innerHTML = `
    <div id="gamecontainer">
        <div gameIndex="0" class="game"></div>
        <div gameIndex="1" class="game"></div>
        <div gameIndex="2" class="game"></div>
        <div gameIndex="3" class="game"></div>
        <div gameIndex="4" class="game"></div>
        <div gameIndex="5" class="game"></div>
        <div gameIndex="6" class="game"></div>
        <div gameIndex="7" class="game"></div>
        <div gameIndex="8" class="game"></div>
    </div>
    `
    buildInitialState();
}





// EVENT LISTENERS
const buildInitialState = () => {
    cells.forEach(eachCell => {
        console.log(eachCell);
        eachCell.addEventListener("click", onBoardClick);
        restartBtn.addEventListener('click', restartGame);
        statusGame.textContent = `${gameState.currentPlayer}'s turn`;
        running = true;
    })
};


const onBoardClick = (event) => {
    const gameIndex = event.target.getAttribute('gameIndex')
    console.log(gameIndex);
   
        
    updatedGame(event.target, gameIndex);
    checkWinner();
    

};








// INITIAL SETUP
buildInitialState();
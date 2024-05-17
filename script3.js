const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameActive = true;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '' && gameActive) {
            cell.textContent = currentPlayer;
            if (checkWin()) {
                announceWinner(currentPlayer);
                gameActive = false;
            } else if (checkDraw()) {
                announceDraw();
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});


function checkWin() {
    // Add logic to check for winning conditions
    // Return 'X', 'O', or null if no winner
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '' && gameActive) {
            cell.textContent = currentPlayer;
            const winner = checkWin();
            if (winner) {
                announceWinner(winner);
                gameActive = false;
            } else if (checkDraw()) {
                announceDraw();
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});



function checkDraw() {
    for (let cell of cells) {
        if (cell.textContent === '') {
            // If there is any empty cell, the game is not a draw
            return false;
        }
    }
    // If all cells are filled and there is no winner, it's a draw
    return true;
}

function announceWinner(winner) {
    const message = winner ? `Player ${winner} wins!` : "It's a draw!";
    document.getElementById('winnerMessage').innerHTML = message;
}


function announceDraw() {
    alert("It's a draw!");
}

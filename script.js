const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#turns");
const restartButton = document.querySelector("#restart-btn");
const winsConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let playerTurn = "X";
let running = true;

function events(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    statusText.textContent = `${playerTurn}'s Turn`;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex")
    if (options[cellIndex] != "" || !running){
        return;
    }
    cellUpdate(this, cellIndex);
    checkWinner();
}
function cellUpdate(cell, index){
    options[index] = playerTurn;
    cell.textContent = playerTurn;
}

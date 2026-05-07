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
function changePlayer(){
    playerTurn = (playerTurn == "X") ? "O" : "X";
    statusText.textContent = `${playerTurn}'s Turn`;
}
function checkWinner(){
    let roundWon = false;
    for (let index = 0; index < winsConditions.length; index++) {
        const condition = winsConditions[index];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        if (cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if (cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if (roundWon){
        statusText.textContent = `${playerTurn} is the Winner`;
        running = false
    } else if (!options.includes("")){
        statusText.textContent = "No one wins, it's Draw";
    } else {
        changePlayer()
    }
}
function reset(){
    cells.forEach(cell => cell.textContent = "");
    options = ["", "", "", "", "", "", "", "", ""];
    playerTurn = "X";
    running = true;
    statusText.textContent = `${playerTurn}'s Turn`;
}
events()
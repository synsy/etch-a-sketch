const container = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset');
let gridCount = 16;

function createGrid(){    
    for (let i = 0; i < gridCount; i++){
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        container.appendChild(gridRow);
        for(let j = 0; j < gridCount; j++){
            let gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridRow.appendChild(gridItem);
        }
    }
}

createGrid();
highlightGridItems();

function highlightGridItems(){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        });
    });
}

function resetGrid(){
    var userInput = prompt("Enter desired grid size (1-100): ");
    if (userInput > 100 || userInput < 1){
        alert("Please enter a number between 1 and 100.");
        return;
    }
    let gridRows = document.querySelectorAll('.grid-row');
    gridRows.forEach((gridRow) => {
        gridRow.remove();
    });
    gridCount = userInput;
    createGrid();
    highlightGridItems();
}

resetButton.addEventListener('click', resetGrid);
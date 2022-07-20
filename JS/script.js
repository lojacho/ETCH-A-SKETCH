var gridSize = document.getElementById("gridSize").value;

function createGrid(gridSize) {
    const sketchPad = document.querySelector('.sketchPad');
    sketchPad.textContent =`${gridSize}`;

}

createGrid(gridSize)
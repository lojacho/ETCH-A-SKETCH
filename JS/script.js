let gridSize = document.getElementById("gridSize").value;

function createGrid(gridSize) {
    const sketchPad = document.querySelector('.sketchPad');
    const rows= gridSize;
    const cols= rows;
    sketchPad.style.setProperty('--grid-rows', rows);
    sketchPad.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        sketchPad.appendChild(cell).className = "grid-item";
      };
}

createGrid(gridSize)
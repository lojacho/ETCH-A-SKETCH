let gridSize = document.getElementById("gridSize").value;
document.getElementById("gridSize").addEventListener('change', createGrid);

function createGrid(gridSize) {
    gridSize = document.getElementById("gridSize").value;
    const sketchPad = document.querySelector('.sketchPad');
    const rows= gridSize;
    const cols= gridSize;
    sketchPad.style.setProperty('--grid-rows', rows);
    sketchPad.style.setProperty('--grid-cols', cols);

    const list = document.querySelector(".sketchPad");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        sketchPad.appendChild(cell).className = "grid-item";
      };
      over();

}

function over(){
  const gridItems = document.querySelectorAll('.grid-item');
  [...gridItems].forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('grid-item-over');
    })
  })
}

createGrid(gridSize);


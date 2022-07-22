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
        sketchPad.appendChild(cell).className = "gridItem"
        const gridItem = document.querySelectorAll('.gridItem');
        const heightItem= (540/rows);/* 540 comes from the size sketchpad in CSS */
        const widthItem= (540/cols);
        [...gridItem].forEach(item =>{
        item.style.setProperty('--he', heightItem);
        item.style.setProperty('--wi', widthItem);
        console.log(heightItem)
        console.log(widthItem)

        });
      };
      over();
}

function over(){
  const gridItems = document.querySelectorAll('.gridItem');
  [...gridItems].forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('grid-item-over');
    })
  })
}

createGrid(gridSize);


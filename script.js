const gridContainer = document.querySelector("#gridContainer");
const clearButton = document.querySelector("#clear");
let gridSize = 16;

window.addEventListener("load", setDefault(16))

function setDefault(){
    setGridSize(16);
    fillGrid(16);
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

let newSize = document.querySelector("#sizeRange")
newSize.value = 16;
let displaySize = document.querySelector("#sizeLabel");
displaySize.textContent = newSize.value;
newSize.addEventListener("mousemove", function(){
    displaySize.textContent = newSize.value
})


function setGridSize(gridSize){
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

function fillGrid(gridSize){
    let pixelAmount = gridSize * gridSize
    for (let i = 0; i < pixelAmount; i++){
        const gridPixel = document.createElement('div');
        gridPixel.classList = "gridPixel";
        gridPixel.style.backgroundColor = "white";
        gridContainer.appendChild(gridPixel);
    }
}

newSize.addEventListener('input',function(){
    let gridSize = document.querySelector("#sizeRange").value;
    removeAllChildNodes(gridContainer)
    setGridSize(gridSize);
    fillGrid(gridSize);

})
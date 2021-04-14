const container = document.querySelector("#container");




for(var i = 0; i < 256; i++){
    grid = document.createElement('div');
    grid.className = "grid";
    grid.id = "grid"
    container.appendChild(grid); 
    
}
const gridPixel = document.querySelectorAll(".grid")

gridPixel.forEach(gridPixel => {
    gridPixel.addEventListener("mouseover", () => {
        gridPixel.style.backgroundColor = "black"
    })
})
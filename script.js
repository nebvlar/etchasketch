const container = document.querySelector("#container");

for(var i = 0; i < 256; i++){
    grid = document.createElement('div');
    grid.classList = "grid";
    container.appendChild(grid); 
}

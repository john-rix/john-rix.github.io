//define initial grid size
var size = 100;

//build the grid layout
const container = document.querySelector('#container');
function buildGrid(size) {
    container.style.cssText = `grid-template-columns: repeat(${size}, auto)`;
    for (i=0; i<(size*size); i++) {
        let pixel = document.createElement('div');
        pixel.classList.add("pixel")
        container.appendChild(pixel);
    };
};
buildGrid(size);

//change color of pixels on mouseover
function draw() {
const pixels = document.querySelectorAll('.pixel');
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', (e) => {
                e.target.style.background = 'black';
            });
        });
};
draw();

//reset the grid and rebuild with new dimensions
//need to set a min and max for input, only allow integers****
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);
function reset() {
    container.textContent = '';
    size = window.prompt('Enter number of cells per side');
    buildGrid(size);
    draw()
};

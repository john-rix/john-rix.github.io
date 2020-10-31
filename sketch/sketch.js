//define initial grid size
var size = 50;

//build the grid layout
const grid = document.querySelector('#grid');
function buildGrid(size) {
    grid.style.cssText = `grid-template-columns: repeat(${size}, auto)`;
    for (i=0; i<(size*size); i++) {
        let pixel = document.createElement('div');
        pixel.classList.add("pixel")
        grid.appendChild(pixel);
    };
};
buildGrid(size);

//change color of pixels on mouseover
function draw() {
    const pixels = document.querySelectorAll('.pixel');
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', (e) => {
                e.target.style.background = document.querySelector('#colorPicker').value;
            });
        });
};
draw();

//clear grid of color
function clear() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.style.background = 'white';
    })
}
const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', clear)

//reset the grid and rebuild with new dimensions
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);
function reset() {
    grid.textContent = '';
    size = window.prompt('Enter number of cells per side');
    buildGrid(size);
    draw()
};

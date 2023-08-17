//ask user to enter the size of grid
const userGrid = prompt("Enter the square per grid", 2);
const range = document.getElementById('range-slider');
const rangeShower = document.querySelector('.rangeSliderValue');
range.addEventListener('input', () => {
    rangeShower.textContent = range.value;
})
// when user enters a input make that much size of grid
const divContainer = document.querySelector('.drawing-container');
for (let index = 0; index < userGrid * userGrid; index++){
    //create a div element and select main container
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-blocks');
    div.style.border = "1px solid grey"
    div.style.width = "calc(" + (divContainer.clientWidth/userGrid) + "px" + " - " + 2 + "px" + ")";
    div.style.height = "calc(" + (divContainer.clientHeight/userGrid) + "px" + " - " + 2 + "px" + ")";
    divContainer.appendChild(div)
}

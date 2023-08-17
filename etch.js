//selecting input range
const range = document.getElementById('range-slider');

//selecting paragraph
const rangeShower = document.querySelector('.rangeSliderValue');

//selecting main container
const divContainer = document.querySelector('.drawing-container');

//default 2 * 2 grid at start
createDivs(range.value);

//when slided => shows the slider's value
range.addEventListener('input', () => {
    rangeShower.textContent = range.value;
    const amount = range.value;
    //when event is triggered => removes the old divs and replaces it with new div
    divContainer.innerHTML = "";
    createDivs(amount);
})

//when draw button is clicked
    //change color of div to black when mouse is hovered over it
const changeButton = document.querySelector('.changingColor');
changeButton.addEventListener('click',function whenClicked(){
    for (const child of divContainer.children){
        child.addEventListener('mouseover',
        function setColor(){
            child.style.backgroundColor =
            'black'
        })
    }
})

//when clear button clicked => it clears all divs back color
const clearbutton = document.querySelector('.clear-all');
clearbutton.addEventListener('click', () => {
    for (const child of divContainer.children){
        child.style.backgroundColor = '';
    }
})

//when randomizer clicked => random colors are generated
const randomizer = document.querySelector('.randomizer');
randomizer.addEventListener('click', function setRandomColor(){
    for(const child of divContainer.children){
        child.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        })
    }
})

//when clicked => will generate only rainbow Colors
const setRainbowColor = [
    '#9400D3',
    '#4B0082',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000' 
];

const rainbowButton = document.querySelector('.rainbowColor');
rainbowButton.addEventListener('click', () => {
    for (const child of divContainer.children){
        child.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = setRainbowColor[Math.floor(Math.random()*7)]
        })
    }
})

//color picker button

//create a specified amount of div element
function createDivs(userGrid){
    for (let index = 0; index < userGrid**2; index++){
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-blocks');
        div.style.border = "1px solid grey"
        div.style.width = "calc(" + (divContainer.clientWidth/userGrid) + "px" + " - " + 2 + "px" + ")";
        div.style.height = "calc(" + (divContainer.clientHeight/userGrid) + "px" + " - " + 2 + "px" + ")";
        divContainer.appendChild(div)
    }
}
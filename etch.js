//selecting input range
const range = document.getElementById('range-slider');

//selecting drawing container
const divContainer = document.querySelector('.drawing-container');

//default 2 * 2 grid at start
createDivs(range.value);

//create a queryselector for all buttons 
const allButtons = document.querySelectorAll('button');
for (const btn of allButtons){
    btn.addEventListener('click', (event) => {
        allInOneCaptain(event.target)
    });
}

//when slided => shows the slider's value
range.addEventListener('input', () => {
    document.querySelector('.rangeSliderValue').textContent = range.value;
    const amount = range.value;
    //when event is triggered => removes the old divs and replaces it with new div
    divContainer.innerHTML = "";
    createDivs(amount);
})

//brightness controller
const brightness = document.querySelector('#brightnessSlider')
brightness.addEventListener('input', () => {
    document.querySelector('.controlBrightness').textContent = brightness.value
    for (const child of divContainer.children){
        child.style.filter = 'brightness(' + brightness.value + ')'
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

//customized color picker button
const colorPicker = document.querySelector('.colorPicker');
colorPicker.addEventListener('click', () => {
    for (const child of divContainer.children){
        child.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = colorPicker.value;
        })
    }
})

//any button gets clicked, => it will get called
function allInOneCaptain(buttonValue){
    for (const child of divContainer.children){
        if (buttonValue.innerHTML == 'REMOVE PIXELS'){
            child.style.border = 'none';
            child.style.width = "calc(" + (divContainer.clientWidth/range.value) + "px" + ")";
            child.style.height = "calc(" + (divContainer.clientHeight/range.value) + "px" + ")";
        }
        else if (buttonValue.innerHTML == 'CLEAR'){
            child.style.backgroundColor = '';
        }
        child.addEventListener('mouseover', (e) => {
            if (buttonValue.innerHTML == "DRAW"){
                e.target.style.backgroundColor = 'black';
            }
            else if (buttonValue.innerHTML == "RANDOM"){
                child.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            }
            else if (buttonValue.innerHTML == "VIBGYOR"){
                e.target.style.backgroundColor = setRainbowColor[Math.floor(Math.random()*7)];
            }
            else {
                child.style.backgroundColor = '';
            }
        })
    }
}

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
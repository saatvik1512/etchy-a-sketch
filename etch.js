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

function createDivs(userGrid){
    for (let index = 0; index < userGrid**2; index++){
        //create a div element and select main container
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-blocks');
        div.style.border = "1px solid grey"
        div.style.width = "calc(" + (divContainer.clientWidth/userGrid) + "px" + " - " + 2 + "px" + ")";
        div.style.height = "calc(" + (divContainer.clientHeight/userGrid) + "px" + " - " + 2 + "px" + ")";
        divContainer.appendChild(div)
    }
}

//create a func
    // deletes all previous divs inside divContainer;
const container = document.querySelector('.container');

// grid size slider
const slider = document.querySelector('.slider');
const output = document.querySelector('.square-number');
output.innerHTML = slider.value

// change the number underneath the slider
function update() {
    output.innerHTML = slider.value
}

slider.addEventListener('input', update);

// create a grid with selected slider value when mouse lifts off and reset square colour
slider.addEventListener('change', () => {
    colourRemove();
    gridCreate(slider.value);
})
update()

function gridCreate(squaresNumber) {
    for (let i = 0; i < Math.pow(squaresNumber,2); i++) {
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('square');
    }
    colour();
    // change the number of grid columns and rows to number of squares
    container.style.gridTemplateRows = 'repeat' + '(' + `${squaresNumber}` + ',' +  '1fr'+ ')';
    container.style.gridTemplateColumns = 'repeat' + '(' + `${squaresNumber}` + ',' +  '1fr'+ ')';
  }


// change colour of square to black when left mouse is held down and dragged
function colour() {
const squareDiv = document.querySelectorAll('.square');
    squareDiv.forEach((div) => {                            
        div.addEventListener('mouseover',  (e) => {
            if (e.buttons != 1) return; //  stop function if 'mouse 1' (left button) is not clicked                        
            div.style.background = 'black';
        })

        div.addEventListener('mousedown',  (e) => {   
            e.preventDefault(); // prevent dragging on mousedown
            div.style.background = 'black';
        })   
    })
}

// change colour of square to random hex value
function colourRandom() {
    const squareDiv = document.querySelectorAll('.square');
squareDiv.forEach((div) => {                            
    div.addEventListener('mouseover',  (e) => {
            if (e.buttons != 1) return; //  stop function if 'mouse 1' (left button) is not clicked                        
            let randomColour = Math.floor(Math.random()*16777215).toString(16);
            div.style.background = "#" + randomColour;
    })
   
    div.addEventListener('mousedown',  (e) => {   
            e.preventDefault(); // prevent dragging on mousedown
            let randomColour = Math.floor(Math.random()*16777215).toString(16);
            div.style.background = "#" + randomColour;
    })   
})
}

// reset colour of squares to white
function colourRemove() {
    const squareDiv = document.querySelectorAll('.square');
    squareDiv.forEach((div) => {   
        div.style.background = 'white';
    })
}




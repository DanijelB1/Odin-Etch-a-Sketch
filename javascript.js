const container = document.querySelector('.container');

function gridCreate(squaresNumber) {
    for (let i = 0; i < Math.pow(squaresNumber,2); i++) {
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('square');
        console.log('a')
    }
}

gridCreate(16);

const squareDiv = document.querySelectorAll('.square');

squareDiv.forEach((div) => {                            
    div.addEventListener('mouseover',  (e) => {
        if (e.buttons != 1) return; //  stops function if 'mouse 1' (left button) is not clicked                        
        div.style.background = 'blue';
    })
   
    div.addEventListener('mousedown',  (e) => {   
        e.preventDefault(); // prevents dragging on mousedown
        div.style.background = 'blue';
    })   
})



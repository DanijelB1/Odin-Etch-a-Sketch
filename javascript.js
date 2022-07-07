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
    div.addEventListener('mouseover', (e) => {
        e.target.style.background = 'blue'
    })
})




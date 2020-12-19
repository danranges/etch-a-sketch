const sketchContainer = document.querySelector('#sketch-container')
const slider = document.getElementById("grid-size")
const reset = document.querySelector('#reset')
const normalMode = document.querySelector('#normal')
const additiveMode = document.querySelector('#additive')
let rowWidth, colHeight
let drawMode = 'normal'

function createGridElements(){
    let i = 0
    while (i<(slider.value**2)) {
        let newSquare = document.createElement('div');
        newSquare.classList.add('grid-box');
        sketchContainer.appendChild(newSquare);
        ++i;
    }
}

function updateGridContainer() {
    rowWidth = sketchContainer.clientWidth/slider.value
    colHeight = sketchContainer.clientWidth/slider.value
    document.getElementById('sketch-container').style.gridTemplateColumns = `repeat(${slider.value}, ${colHeight}px)`
    document.getElementById('sketch-container').style.gridTemplateRows = `repeat(${slider.value}, ${rowWidth}px)`
}

function addMouseoverEvent() {
    let gridBoxes = document.getElementsByClassName('grid-box')
    for (i = 0; i < gridBoxes.length; i++) {
        gridBoxes[i].addEventListener('mouseover', drawPixel);
    }
}

function drawPixel() {
    console.log(drawMode)
    if(drawMode === 'normal') {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
    } else if (drawMode === 'additive') {
    }
}

updateGridContainer()
createGridElements()
addMouseoverEvent()




slider.addEventListener('input', () => {
    sketchContainer.innerHTML = ''
    updateGridContainer()
    createGridElements()
    addMouseoverEvent()
})

reset.addEventListener('click', () => {
    let gridBoxes = document.getElementsByClassName('grid-box')
    for (i = 0; i < gridBoxes.length; i++) {
        gridBoxes[i].style.backgroundColor = ''
    }
})

normalMode.addEventListener('click', () => {
    drawMode = 'normal'
})

additiveMode.addEventListener('click', () => {
    console.log(drawMode)
    drawMode = 'additive'
})

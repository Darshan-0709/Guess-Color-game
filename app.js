const colorElement = document.querySelectorAll('[data-display-color]');
const newColorsButton = document.querySelector('[data-new-color]')
const difficultyEasy = document.querySelector('[data-easy]')
const difficultyHard = document.querySelector('[data-hard]')
const difficultyHardBox = document.querySelector('[data-more-color]');
const correctColorTextElement = document.querySelector('[data-hero-color]');

let r;
let g;
let b;
let color;
let boxes = 5;
let pickColor;
let correctColor;

newColors()

newColorsButton.addEventListener('click', newColors);

difficultyHard.addEventListener('click', ()=> {
  difficultyHardBox.classList.remove('visibilityNone');
  boxes = 5
});
difficultyEasy.addEventListener('click', ()=> {
  difficultyHardBox.classList.add('visibilityNone');
  boxes = 2
});



function newColors() {
  colorElement.forEach(cell => {
    generatNewColors();
    cell.style.backgroundColor = `${color}`
    cell.addEventListener('click', checkColor)
  });
  pickColor = colorElement[Math.floor(Math.random() * boxes)]
  correctColor = pickColor.style.backgroundColor;
  correctColorTextElement.innerText = correctColor;

}

function generatNewColors() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  color = `rgb(${r},${g},${b})`;
}

function checkColor(e) {
  chooseColor = e.target
  if (chooseColor == pickColor) {
    win()
  }else {
    chooseColor.style.backgroundColor = 'transparent'
  }
}

function win() {
  colorElement.forEach(cell => {
    cell.style.backgroundColor = correctColor
  })
}
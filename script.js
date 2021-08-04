const button = document.querySelector('.btn');
const button2 = document.querySelector('.btn2');
const border = document.querySelector('.border');
const green = document.querySelectorAll('.green');
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')
const white = document.querySelector('.white')
const container = document.querySelector('.container')

function clickMe() {
    alert('Hello, you just clicked me.');
}

function colorChangeButton() {
    border.style.color = 'red';
    button2.textContent = "JavaScript";
}

const greenAlert = () => {
    alert(`Hello I'm Green`);
}

const blueButton = () => {
    blue.style.backgroundColor = 'red';

}

const yellowButton = () => {
    const numOne  = prompt('Enter a number');
    const numTwo = prompt('Enter a number');
    alert(Number(numOne) + Number(numTwo));
}

const whiteDel = () => {
    container.removeChild(white);
    alert('You killed the white button')
} 

green[0].addEventListener('click', greenAlert);
green[1].addEventListener('click', greenAlert);
button.addEventListener('click', clickMe);
button2.addEventListener('click', colorChangeButton);
blue.addEventListener('click', blueButton)
yellow.addEventListener('click', yellowButton)
white.addEventListener('click', whiteDel);
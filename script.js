

var button = document.querySelector('.btn');
var button2 = document.querySelector('.btn2');
var border = document.querySelector('.border');
function clickMe() {
    alert('Hello, you just clicked me.');
}

function colorChangeButton() {
    border.style.color = 'red';
    button2.textContent = "JavaScript";
}

button.addEventListener('click', clickMe);
button2.addEventListener('click', colorChangeButton);
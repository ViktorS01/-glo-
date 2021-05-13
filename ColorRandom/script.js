let button = document.querySelector('.button'),
    body = document.querySelector('body'),
    title = document.querySelector('.title-color'),
    randomColor = '#',
    letters = '0123456789ABCDEF';

button.addEventListener('click', function (){
    for (let i = 0; i < 6; i++){
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    
    title.textContent = randomColor;
    body.style.backgroundColor = randomColor;

    randomColor = '#';
});
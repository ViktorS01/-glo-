window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let timerOver = false; 

    const countTimer = function (deadLine) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        
        const getTimeRemaining = function(){
            let timeStart = new Date().getTime(),
                timeFinish = new Date(deadLine).getTime(),
                timeRemaining = (timeFinish - timeStart) / 1000;

            let hours = Math.floor(timeRemaining / 3600),
                minutes = Math.floor( (timeRemaining / 60) % 60),
                seconds = Math.floor(timeRemaining % 60);
            
            hours <= 9 ? hours = '0' + hours : hours;
            minutes <= 9 ? minutes = '0' + minutes : minutes; 
            seconds <= 9 ? seconds = '0' + seconds : seconds; 
            
            return {timeRemaining, hours, minutes, seconds};
        }

        const updateClock = function (){
            let timer = getTimeRemaining();

            if (timer.timeRemaining <= 0){
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';

                timerOver = true;
            } else{
                timerHours.textContent = timer.hours;
                timerMinutes.textContent = timer.minutes;
                timerSeconds.textContent = timer.seconds;

            }

            // if (timer.timeRemaining > 0){
            //     setTimeout(updateClock, 1000);
            // }
        }

        if (timerOver === false){
            setInterval(updateClock, 1000);
        }
    };

    const toggleMenu = function (){
        let menu = document.querySelector('.menu'),
            menuTable = document.querySelector('menu'),
            closeButton = document.querySelector('.close-btn'),
            menuItems = menuTable.querySelectorAll('ul>li');

        const handlerMenu = function (){
            // if (!menuTable.style.transform || menuTable.style.transform === 'translate(-100%)'){
            //     menuTable.style.transform = 'translate(0)';
            // } else{
            //     menuTable.style.transform = 'translate(-100%)';
            // }

            menuTable.classList.toggle('active-menu');
        };

        menu.addEventListener('click', handlerMenu);

        closeButton.addEventListener('click',handlerMenu);

        menuItems.forEach((items) => items.addEventListener('click', handlerMenu));

    };

    const togglePopUp = function (){
        let popUpBtn = document.querySelectorAll('.popup-btn'),
            popUp = document.querySelector('.popup'),
            popUpClose = document.querySelector('.popup-close');

        popUpBtn.forEach((item) => {
            item.addEventListener ('click', () => {
                popUp.style.display = 'block';
            });
        });

        popUpClose.addEventListener('click', () => {
            popUp.style.display = 'none';
        });
    };

    togglePopUp();
    toggleMenu();
    countTimer('16 june 2021');

    });
'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let date = new Date();

week.forEach((elem, item) => {
    if (elem == date.getDay()){
        console.log(elem.bold()); 
    }
    else if (elem === 'Суббота'|| elem === 'Воскресенье'){
        console.log(elem.italics());
    }
    else {
        console.log(elem);
    }
});

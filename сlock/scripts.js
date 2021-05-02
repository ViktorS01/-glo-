'use strict';
let now = new Date();

const time1 = function (){
    let getDayString = function (num){
        switch (num) {
            case 0:
                return "Воскресенье, ";
            case 1:
                return "Понедельник, ";
            case 2:
                return "Вторник, ";
            case 3:
                return "Среда, ";
            case 4:
                return "Четверг, ";
            case 5:
                return "Пятница, ";
            case 6:
                return "Суббота, ";
        }
    };

    let getMonthString = function (num){
        switch (num) {
            case 0:
                return "Января ";
            case 1:
                return "Февраля ";
            case 2:
                return "Марта ";
            case 3:
                return "Апреля ";
            case 4:
                return "Мая ";
            case 5:
                return "Июня ";
            case 6:
                return "Июля ";
            case 7:
                return "Августа ";
            case 8:
                return "Сентября ";
            case 9:
                return "Октября ";
            case 10:
                return "Ноября ";
            case 11:
                return "Декабря ";
        }
    };

    let getHoursString = function (num){
        switch (num) {
            case 2, 3, 4, 22, 23:
                return " Часа ";
            case 1, 21:
                return " Час ";
            default:
                return " Часов ";
        }
    };

    console.log("Сегодня " + getDayString(now.getDay()) + now.getDate() + " " +
        getMonthString(now.getMonth() - 1) + " " + now.getUTCFullYear() + " года " +
        now.getHours() + getHoursString(now.getHours()) + now.getMinutes() + " Минут " +
        now.getSeconds() + " Секунд ");
};

const time2 = function (){
    const checkLen = function(num){
        if (num.toString().length === 1){
            return '0' + num;
        }
        else{
            return num;
        }
    };
    console.log (checkLen(now.getDate()) + "." + checkLen(now.getMonth() + 1) + "." +  now.getUTCFullYear() + " - " +
        checkLen(now.getHours()) + ":" + checkLen(now.getMinutes()) + ":" + checkLen(now.getSeconds()));
};

time1();
time2();
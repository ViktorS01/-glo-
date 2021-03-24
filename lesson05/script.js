'use strict';

let money;

const start = function (){
    do {
        money = prompt("Ваш месячный доход?");
    }

    while(money === null || money.trim() === '' || isNaN(money));
}

start();

//let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//let deposit = confirm('Есть ли у вас депозит в банке?');

//let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
//let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

let mission = 500000;
// let period = 12;

// let lang = prompt("lang =", "ru");

// let arrDays = ["Понедельник\n вторник\n среда\n четверг\n пятница\n суббота\n воскресенье",
//  "Sunday\n Monday\n Tuesday\n Wednesday\n Thursday\n Friday \n Saturday"]

// if (lang === "ru"){
//     console.log("Понедельник\n вторник\n среда\n четверг\n пятница\n суббота\n воскресенье");
    
// }

// if (lang === 'en'){
//     console.log("Sunday\n Monday\n Tuesday\n Wednesday\n Thursday\n Friday \n Saturday");
// }

// switch (lang){
//     case "en":
//         console.log("Sunday\n Monday\n Tuesday\n Wednesday\n Thursday\n Friday \n Saturday");
//         break;
//     case "ru":
//         console.log("Понедельник\n вторник\n среда\n четверг\n пятница\n суббота\n воскресенье");
// }

// lang === "en" ? console.log(arrDays[1]) : console.log(arrDays[0]);

const getExpensesMonth = function (){
    return amount1 + amount2;
}

const getAccumulatedMonth = function (){
    return money - (amount1 + amount2);
}

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function (){
    return Math.ceil(mission / accumulatedMonth) > 0 ? "Цель будет достигнута за " + Math.ceil(mission / accumulatedMonth)  + " месяцев." : "Цель не будет достигнута";
}

let budgetDay = Math.floor(accumulatedMonth / 12) ;

console.log('budgetDay: ', budgetDay);

if (budgetDay >= 1200){
    console.log("У вас высокий уровень дохода.");
}

if (budgetDay >= 600 && budgetDay < 1200){
    console.log("У вас средний уровень дохода.");
}

if (budgetDay < 600){
    console.log("К сожалению у вас уровень дохода ниже среднего");
}

else if (budgetDay < 0){
    console.log("Что-то пошло не так!");
}

const getInfo = function (str){
    if (typeof str !== 'string'){
        return "Введена не строка!";
    }
    if (str.length > 30){
        return str.substr(0 , 30) + "...";
    }
    return str.trim();
}

console.log('getInfo(1);: ', getInfo(1));
console.log('getInfo("    1    "):', getInfo("    1    "));
console.log(getInfo("dfllgdfgdfldfldlkdf;llllllldfl;dfl;kdl;kdfgl;dfkgl;dfkgldfg;dflgdflgl;gklgfkg;ldfkgl;dfkgdlf;kg;ldfkg;dlfkg;ldfkg;dflgkl;dfvl;dvl;l;"));

// update 

let array = [];
let i = 0;

do {
    array.push(+prompt("Введи число! " + (i+1)));
}

while (array.length < 5);

console.log(array);

const dividers = function (num) {
    let resstr = '';
    if (num === 0){
        return 0;
    } else if (num === 1){
        return 1;
    }
    for (let i = 0; i < num; i++){
        if (num % i === 0){
            resstr += i + " ";
        }
    }

    return resstr;
}

for (let i = 0; i < 100; i++){
    console.log(i , "Делители этого числа ", dividers(i));
}
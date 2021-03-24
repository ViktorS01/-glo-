let money = +prompt("Ваш месячный доход?");

//let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//let deposit = confirm('Есть ли у вас депозит в банке?');

//let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
//let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

let mission = 500000;
let period = 12;

let budgetMonth = money - amount1 - amount2;
let budgetDay = Math.floor(budgetMonth/12);


let lang = prompt("lang =", "ru");

console.log('budgetDay: ', budgetDay);
console.log('budgetMonth: ', budgetMonth);

console.log(Math.ceil(mission/budgetMonth));

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

let arrDays = ["Понедельник\n вторник\n среда\n четверг\n пятница\n суббота\n воскресенье",
 "Sunday\n Monday\n Tuesday\n Wednesday\n Thursday\n Friday \n Saturday"]

if (lang === "ru"){
    console.log("Понедельник\n вторник\n среда\n четверг\n пятница\n суббота\n воскресенье");
    
}

if (lang === 'en'){
    console.log("Sunday\n Monday\n Tuesday\n Wednesday\n Thursday\n Friday \n Saturday");
}

switch (lang){
    case "en":
        console.log("Sunday\n Monday\n Tuesday\n Wednesday\n Thursday\n Friday \n Saturday");
        break;
    case "ru":
        console.log("Понедельник\n вторник\n среда\n четверг\n пятница\n суббота\n воскресенье");
}

lang === "en" ? console.log(arrDays[1]) : console.log(arrDays[0]);
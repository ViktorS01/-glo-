'use strict';

let money;
let accumulatedMonth;

const start = function (){
    do {
        money = prompt("Ваш месячный доход?");
    }

    while(money === null || money.trim() === '' || isNaN(money));
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    persentDeposit: 0,
    moneyDeposit: 0,
    deposit: false,
    mission: 500000,
    period: 3,
    asking: function(){

        if (confirm("Есть ли у вас доп. заработок?")){
            let itemIncome,
                cashIncome;
            do {
                itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
            }
        
            while(itemIncome === null || itemIncome.trim() === '' || !isNaN(itemIncome));

            do {
                cashIncome = prompt("Сколько в месяц зарабатываете на этом?", 10000);
            }
        
            while(cashIncome === null || cashIncome.trim() === '' || isNaN(cashIncome));

            appData.income[itemIncome] = cashIncome;
        }


        let addExpenses;

        do {
            addExpenses = prompt('Перечислите возможные расходы через запятую:');
        }
    
        while(addExpenses === null || addExpenses.trim() === '' || !isNaN(addExpenses));

        appData.addExpenses = addExpenses.toLowerCase().split(",");
        appData.deposit = confirm("Есть ли у вас депозит в банке?");

        let sum = 0;
        let answer = '';
        for (let i = 1; i <= 2; i++){
            answer = prompt("Введите обязательную статью расходов");
            sum = +prompt("Во сколько это обойдется");
            appData.expenses[answer] = sum;
        }
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function (){
        let sum = 0;
        for (let item in appData.expenses){
            sum += appData.expenses[item];
        }
        return "Ваши расходы: " + sum;
    },
    getBudget: function (){
        const sum = function(){
            let summ = 0;
            for (let key in appData.expenses){
                summ += +appData.expenses[key];
            }
            return summ;
        };

        let accumulatedMonth =  money - (sum());

        let budgetDay = Math.floor(accumulatedMonth / 12) ;

        if (budgetDay >= 1200){
            return("У вас высокий уровень дохода.");
        }

        if (budgetDay >= 600 && budgetDay < 1200){
            return("У вас средний уровень дохода.");
        }

        if (budgetDay < 600){
            return("К сожалению у вас уровень дохода ниже среднего");
        }

        else if (budgetDay < 0){
            return("Что-то пошло не так!");
        }
    },
    getTargetMonth: function (){
        const sum = function(){
            let summ = 0;
            for (let key in appData.expenses){
                summ += +appData.expenses[key];
            }
            return summ;
        };
        let accumulatedMonth =  money - (sum());

        return Math.ceil(appData.mission / accumulatedMonth) > 0 ? "Цель будет достигнута за " + Math.ceil(appData.mission / accumulatedMonth)  + " месяцев." : "Цель не будет достигнута";
    },

    getInfoDeposit: function(){
        if (appData.deposit){
            do {
                appData.persentDeposit = prompt("Какой годовой процент?", '10');
            }
        
            while(appData.persentDeposit === null || appData.persentDeposit.trim() === '' ||
                !isNaN(appData.persentDeposit));

            do {
                appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
            }
        
            while(appData.moneyDeposit === null || appData.moneyDeposit.trim() === '' || isNaN(appData.moneyDeposit));

            
        }
    },

    calkSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }


};

appData.asking();

console.log(appData.getExpensesMonth());
console.log(appData.getTargetMonth());
console.log(appData.getBudget());

// console.log(appData.expenses);


// console.log("Наша программа включает в себя данные: ");
// for (let key in appData){
//     console.log("Свойство: " + key + " со значением: " + appData[key]);
// }

// appData.getInfoDeposit();
// console.log(appData.calkSavedMoney, appData.persentDeposit, appData.moneyDeposit);

let expensesString = '';
appData.addExpenses.forEach((element, index) => {
    expensesString += element[0].toUpperCase() + element.substring(1);
    if (index !== appData.addExpenses.length - 1){
        expensesString += ', ';
    }
});

console.log(expensesString);